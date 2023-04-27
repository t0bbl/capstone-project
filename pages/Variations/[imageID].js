import Image from "next/image.js";
import styled from "styled-components";
import { StyledA } from "../../components/StyledLink";
import useSWR from "swr";
import { useRouter } from "next/router.js";

export default function ChooseFourVariations() {
  const router = useRouter();
  const { isReady } = router;
  const { imageID } = router.query;

  const { data, isLoading, error } = useSWR(`/Variations/${imageID}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <FourPicsContainer>
      <StyledA href="/PreviewPage/">
        <FourPics
          alt="image  number 1"
          src="https://i.imgur.com/8nUXl6s.jpeg/"
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="https://i.imgur.com/SglfvOg.jpeg/">
        <FourPics
          alt="image number 2"
          src="https://i.imgur.com/8nUXl6s.jpeg/"
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="https://i.imgur.com/rTEFFzZ.webp?maxwidth=1520&fidelity=grand/">
        <FourPics
          alt="image number 3"
          src="https://i.imgur.com/8nUXl6s.jpeg/"
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href="https://i.imgur.com/SME5yCA.jpeg/">
        <FourPics
          alt="image number 4"
          src="https://i.imgur.com/8nUXl6s.jpeg/"
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

const FourPics = styled(Image)`
  width: 45vw;
  height: auto;
  background-color: #333;
  display: flex;
  margin: auto;
`;
