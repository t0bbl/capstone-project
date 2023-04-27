import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";

const imageSrc = "https://i.imgur.com/8nUXl6s.jpeg/";
const imageName = "8nUXl6s.jpeg";

export default function PreviewPage() {
  const router = useRouter();

  function handleClick(event) {
    event.preventDefault();
    router.push(event.target.value);
  }

  const downloadImage = () => {
    saveAs(imageSrc, imageName); // Put your image url here.
  };

  return (
    <>
      <Header />
      <Container>
        <PreviewPicture imageSrc={imageSrc} imageName={imageName} />
        <StyledButton
          type="button"
          value="/ChooseFour/"
          className="variations"
          onClick={handleClick}
        >
          Give me Variations!
        </StyledButton>
      </Container>
      <Container className="bottomButtons">
        <StyledButton type="button" value="/Saved/" onClick={downloadImage}>
          SAVE
        </StyledButton>
        <StyledButton type="button" value="/Print/" onClick={handleClick}>
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
  &.bottomButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
