import { StyledButton } from "@/components/styledComponents/StyledButton";
import { useRouter } from "next/router";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { Container } from "../../components/styledComponents/Container";
import Loading from "../../components/Loading";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { loading } from "../../store/isLoading";
import { useAtom } from "jotai";
import { isFavoriteState } from "../../store/isFavoriteState";
import updateFavorites from "../../lib/updateFavorites";

async function saveFavToCloud(picSRC) {
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

async function putFavorite(cloudinaryData, picID) {
  await fetch("/api/favorites/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      picID: picID,
      picSRCCloudinary: cloudinaryData.url,
      picSRCCloudinarySlug: cloudinaryData.etag,

      favorites: "1",
    }),
  });

  return;
}

const fetcher = (url) => fetch(url).then((res) => res.json());

async function sendRequest(url, { arg, picID, picSRC, picSRCSlug }) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ arg, picID, picSRC, picSRCSlug }),
    });
    const { status } = await response.json();
  } catch (error) {
    console.error("Error in sendRequest:", error);
  }
}

export default function PreviewPage() {
  const router = useRouter();
  const [favPictures, setFavPictures] = useAtom(isFavoriteState);
  const [isLoadingState, setIsLoadingState] = useAtom(loading);
  const { picID } = router.query;
  const option = router.query.option;
  const variant = router.query.variant;
  const { trigger } = useSWRMutation("/api/openai/variations", sendRequest);

  function chooseApiEndpoint(picID, variant) {
    if (variant === "variant2") {
      return `/api/favorites/alltimefavorites/${picID[1]}`;
    } else {
      return `/api/choosevariation/${picID[1]}`;
    }
  }

  const {
    data: shirts,
    isLoading,
    error,
  } = useSWR(picID ? chooseApiEndpoint(picID, variant) : null, fetcher);

  if (isLoading || !shirts) {
    return (
      <>
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
    await trigger({ picID, picSRC, picSRCSlug });
    setIsLoadingState(false);
    router.push(`/Variations/${picID[0]}`);
  }

  async function favoriteImage() {
    const check = favPictures.some((picture) => picture.picID === picID[1]);
    if (check === false) {
      const cloudinaryData = await saveFavToCloud(picSRC);
      await putFavorite(cloudinaryData, `${picID[1]}`);
      setFavPictures([
        {
          picID: `${picID[1]}`,
          picSRCCloudinary: cloudinaryData.url,
          picSRCCloudinarySlug: cloudinaryData.etag,
          isFavorite: true,
          favorites: 1,
        },
        ...favPictures,
      ]);
    } else {
      const picSRCCloudinary = favPictures.find(
        (picture) => picture.picID === `${picID[1]}`
      ).picSRCCloudinary;
      await updateFavorites(
        picSRCCloudinary,
        `${picID[1]}`,
        "increasefavorites"
      );
      setFavPictures(
        favPictures.map((picture) =>
          picture.picID === `${picID[1]}`
            ? { ...picture, isFavorite: true }
            : picture
        )
      );
    }
  }

  async function unFavoriteImage() {
    let picSRCCloudinary;
    if (variant === "variant2") {
      picSRCCloudinary = favPictures.find(
        (picture) => picture.picID === `${picID[0]}`
      ).picSRCCloudinary;
    } else {
      picSRCCloudinary = favPictures.find(
        (picture) => picture.picID === `${picID[1]}`
      ).picSRCCloudinary;
    }
    await updateFavorites(picSRCCloudinary, `${picID[1]}`, "decreasefavorites");
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRCCloudinary === picSRCCloudinary
          ? { ...picture, isFavorite: false }
          : picture
      )
    );
  }
  const shownPic = favPictures.find(
    (favPic) => favPic.picID === `${picID[1]}` || favPic.picID === `${picID[0]}`
  );
  if (isLoadingState) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Container>
          {variant === "variant2" ? (
            <PreviewPicture
              key={shirts.picSRCCloudinarySlug}
              imageSrc={shirts.picSRCCloudinary}
              imageName={shirts.picSRCCloudinarySlug}
            />
          ) : (
            <PreviewPicture
              key={picSRCSlug}
              imageSrc={picSRC}
              imageName={picSRCSlug}
            />
          )}
        </Container>
        <Container preview>
          <StyledButton type="button" onClick={downloadImage}>
            SAVE
          </StyledButton>
          {!shownPic || !shownPic.isFavorite ? (
            <StyledButton type="button" onClick={favoriteImage}>
              FAVORITE
            </StyledButton>
          ) : (
            <StyledButton type="button" onClick={unFavoriteImage} clicked>
              unFAVORITE
            </StyledButton>
          )}
          <StyledButton
            type="button"
            onClick={handleOnClick}
            option={option}
            style={{
              display: option === "optionB" ? "none" : "inline-block",
            }}
          >
            Give me Variations!
          </StyledButton>
        </Container>
      </>
    );
  }
}
