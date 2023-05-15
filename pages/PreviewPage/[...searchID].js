import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { css } from "styled-components";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { loading } from "../../store/isLoading";
import { useAtom } from "jotai";
import IsLoading from "@/components/IsLoading";


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
  const [isLoadingState, setIsLoadingState] = useAtom(loading);
  const router = useRouter();
  const { searchID } = router.query;
  const option = router.query.option;

  const { trigger } = useSWRMutation("/api/openai/variations", sendRequest);

  const { data: shirts, error } = useSWR(
    searchID ? `/api/ChooseVariation/${searchID[1]}` : null,
    fetcher
  );

  if (isLoading || !shirts) {
    return (
      <>
        <Header />
        <IsLoading />
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

  function handlePrint() {
    alert("you printed your Shirt!");
  }

  async function handleOnClick() {
    setIsLoadingState(true);
    await trigger({ searchID, picSRC, picSRCSlug });
    setIsLoadingState(false);

    router.push(`/Variations/${searchID[0]}`);
  }

  if (isLoadingState) {
    return (
      <>
        <Header />
        <IsLoading />
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
          <StyledButton type="button" onClick={handlePrint}>
            PRINT
          </StyledButton>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10vw;
  gap: 20vw;

  ${(props) =>
    props.bottomButtons &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    `}
`;
