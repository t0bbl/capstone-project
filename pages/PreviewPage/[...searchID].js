import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { css } from "styled-components";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const { searchID } = router.query;
  const option = router.query.option;

  const { trigger } = useSWRMutation("/api/openai/variations", sendRequest);

  const { data: shirts, error } = useSWR(
    searchID ? `/api/ChooseVariation/${searchID[1]}` : null,
    fetcher
  );

  if (isLoading || !shirts) {
    return <div>loading...</div>;
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
    setIsLoading(true);

    await trigger({ searchID, picSRC, picSRCSlug });
    setIsLoading(false);

    router.push(`/Variations/${searchID[0]}`);
  }

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
