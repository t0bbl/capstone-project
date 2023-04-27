import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";

import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";

export default function PreviewPage() {
  return (
    <>
      <Header />
      <Container>
        <PreviewPicture />
        <StyledButton type="click" className="variations">
          Give me Variations!
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
`;
