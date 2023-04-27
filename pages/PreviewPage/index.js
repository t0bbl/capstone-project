import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";

export default function PreviewPage() {
  const router = useRouter();

  function handleClick(event) {
    event.preventDefault();

    router.push(event.target.value);
  }
  return (
    <>
      <Header />
      <Container>
        <PreviewPicture />
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
        <StyledButton type="button" value="/Saved/" onClick={handleClick}>
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
