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

  function favoriteImage() {
    const alreadyExists = favPictures.some(
      (picture) => picture.picSRCSlug === picSRCSlug
    );
    if (!alreadyExists) {
      setFavPictures([
        { picSRC: shirts.picSRC, picSRCSlug: shirts.picSRCSlug },
        ...favPictures,
      ]);
    } else {
      setFavPictures(
        favPictures.filter((picture) => picture.picSRCSlug !== picSRCSlug)
      );
    }
  }

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
            style={{ display: option === "optionB" ? "none" : "inline-block" }}
            center
          >
            Give me Variations!
          </StyledButton>
        </Container>
        <Container bottomButtons>
          <StyledButton type="button" onClick={downloadImage}>
            SAVE
          </StyledButton>
          <StyledButton type="button" onClick={favoriteImage}>
            FAVORIT
          </StyledButton>
          <StyledButton type="button" onClick={() => router.push("/Favorit")}>
            FAVORITS
          </StyledButton>
        </Container>
      </>
    );
  }
}
