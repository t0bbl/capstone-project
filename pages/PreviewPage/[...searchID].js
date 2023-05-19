import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { Container } from "../../components/Container";
import Loading from "../../components/Loading";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { loading } from "../../store/isLoading";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";

async function safeFavToCloud(picSRC) {
  const formData = new FormData();
  formData.append("file", picSRC);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const cloudinaryData = await response.json();
  return cloudinaryData;
}

async function safeFavToMongoDB(cloudinaryData, searchID) {
  await fetch("/api/Favorites/safeFavorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      picID: searchID,
      picSRCCloudinary: cloudinaryData.url,
      picSRCCloudinarySlug: cloudinaryData.etag,
    }),
  });

  return;
}

const fetcher = (url) => fetch(url).then((res) => res.json());

async function sendRequest(url, { arg, searchID, picSRC, picSRCSlug }) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ arg, searchID, picSRC, picSRCSlug }),
    });
    const { status } = await response.json();
  } catch (error) {
    console.error("Error in sendRequest:", error);
  }
}

export default function PreviewPage() {
  const router = useRouter();
  const [favPictures, setFavPictures] = useAtom(isFavorit);
  const [isLoadingState, setIsLoadingState] = useAtom(loading);
  const { searchID } = router.query;
  const option = router.query.option;

  const { trigger } = useSWRMutation("/api/openai/variations", sendRequest);

  const {
    data: shirts,
    isLoading,
    error,
  } = useSWR(searchID ? `/api/ChooseVariation/${searchID[1]}` : null, fetcher);

  if (isLoading || !shirts) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  if (error) {
    return <div>error...</div>;
  }

  const downloadImage = () => {
    saveAs(picSRC, picSRCSlug);
  };

  const picSRC = shirts.picSRC;
  const picSRCSlug = shirts.picSRCSlug;

  async function handleOnClick() {
    setIsLoadingState(true);
    await trigger({ searchID, picSRC, picSRCSlug });
    setIsLoadingState(false);
    router.push(`/Variations/${searchID[0]}`);
  }

  async function favoriteImage() {
    const check = favPictures.some((picture) => picture.picID === searchID[1]);
    if (check === false) {
      const cloudinaryData = await safeFavToCloud(shirts.picSRC);
      safeFavToMongoDB(cloudinaryData, `${searchID[1]}`);
      setFavPictures([
        {
          picID: `${searchID[1]}`,
          picSRC: cloudinaryData.url,
          picSRCSlug: cloudinaryData.etag,
          isFavorite: true,
        },
        ...favPictures,
      ]);
    } else {
      setFavPictures(
        favPictures.map((picture) =>
          picture.picID === `${searchID[1]}`
            ? { ...picture, isFavorite: !picture.isFavorite }
            : picture
        )
      );
    }
  }

  async function unFavoriteImage() {
    setFavPictures(
      favPictures.map((picture) =>
        picture.picID === `${searchID[1]}`
          ? { ...picture, isFavorite: false }
          : picture
      )
    );
  }
  const currentPicture = favPictures.find(
    (pic) => pic.picID === `${searchID[1]}`
  );
  console.log(currentPicture);
  if (isLoadingState) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Container>
          <PreviewPicture
            key={picSRCSlug}
            imageSrc={picSRC}
            imageName={picSRCSlug}
          />
          <StyledButton
            type="button"
            onClick={handleOnClick}
            option={option}
            style={{
              display: option === "optionB" ? "none" : "inline-block",
            }}
            center
          >
            Give me Variations!
          </StyledButton>
        </Container>
        <Container bottomButtons>
          <StyledButton type="button" onClick={downloadImage}>
            SAVE
          </StyledButton>
          {!currentPicture?.isFavorite ? (
            <StyledButton type="button" onClick={favoriteImage}>
              FAVORITE
            </StyledButton>
          ) : (
            <StyledButton type="button" onClick={unFavoriteImage} clicked>
              FAVORITE
            </StyledButton>
          )}
          <StyledButton
            type="button"
            onClick={() => router.push("../Favorites/")}
          >
            FAVORITES
          </StyledButton>
        </Container>
      </>
    );
  }
}
