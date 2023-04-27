import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { css } from "styled-components";

const imageSrc = "https://i.imgur.com/8nUXl6s.jpeg/";
const imageName = "8nUXl6s.jpeg";

export default function PreviewPage() {
  const router = useRouter();
  const imageID = "8nUXl6s";

  function handleVariations(event) {
    event.preventDefault();
    router.push(`/Variations/${imageID}`);
  }

  const downloadImage = () => {
    saveAs(imageSrc, imageName);
  };

  function handlePrint() {
    alert("you printed your Shirt!");
  }

  return (
    <>
      <Header />
      <Container>
        <PreviewPicture imageSrc={imageSrc} imageName={imageName} />
        <StyledButton type="button" onClick={handleVariations} center>
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
