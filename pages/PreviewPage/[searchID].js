import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { css } from "styled-components";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PreviewPage() {
  const router = useRouter();
  const { searchID } = router.query;
  const option = router.query.option;

  const {
    data: shirts,
    isLoading,
    error,
  } = useSWR(`/api/ChooseVariation/${searchID}`, fetcher);
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }

  const downloadImage = () => {
    saveAs(shirts.picSRC, shirts.picSRCSlug);
  };

  function handlePrint() {
    alert("you printed your Shirt!");
  }

  function handleOnClick() {
    router.push(`/Variations/${searchID}`);
  }

  return (
    <>
      <Header />
      <Container>
        <PreviewPicture
          key={shirts.picSRCSlug}
          imageSrc={shirts.picSRC}
          imageName={shirts.picSRCSlug}
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
