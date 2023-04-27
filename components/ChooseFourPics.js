import { StyledImage } from "./StyledImage";
import styled from "styled-components";
import { StyledA } from "./StyledLink";

export default function ChooseFourPics() {
  return (
    <FourPicsContainer>
      <StyledA href="/PreviewPage/">
        <StyledImage
          OneOfFourPictures
          alt="image number 1"
          src="https://i.imgur.com/8nUXl6s.jpeg/"
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="https://i.imgur.com/SglfvOg.jpeg/">
        <StyledImage
          OneOfFourPictures
          alt="image number 2"
          src="https://i.imgur.com/SglfvOg.jpeg/"
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="https://i.imgur.com/rTEFFzZ.webp?maxwidth=1520&fidelity=grand/">
        <StyledImage
          OneOfFourPictures
          alt="image number 3"
          src="https://i.imgur.com/rTEFFzZ.webp?maxwidth=1520&fidelity=grand/"
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="https://i.imgur.com/SME5yCA.jpeg/">
        <StyledImage
          OneOfFourPictures
          alt="image number 4"
          src="https://i.imgur.com/SME5yCA.jpeg/"
          width="400"
          height="400"
        />
      </StyledA>
    </FourPicsContainer>
  );
}

const FourPicsContainer = styled.div`
  background-color: yellow;
  display: grid;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  justify-content: center;
`;
