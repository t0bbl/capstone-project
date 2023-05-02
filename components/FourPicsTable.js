import { StyledImage } from "./StyledImage";
import { StyledA } from "./StyledLink";
import styled from "styled-components";

export default function FourPicsTable({
  imageID,
  picSRC1,
  picSRC2,
  picSRC3,
  picSRC4,
}) {
  return (
    <FourPicsContainer>
      <StyledA href="/PreviewPage/">
        <StyledImage
          alt="image number 1"
          src={picSRC1}
          width="400"
          height="400"
          fourpictures
        />
      </StyledA>
      <StyledA href="/PreviewPage/">
        <StyledImage
          fourpictures
          alt="image number 2"
          src={picSRC2}
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="/PreviewPage/">
        <StyledImage
          fourpictures
          alt="image number 3"
          src={picSRC3}
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="/PreviewPage/">
        <StyledImage
          fourpictures
          alt="image number 4"
          src={picSRC4}
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
