import { StyledImage } from "./StyledImage";
import { StyledA } from "./StyledLink";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FourPicsTable() {
  const router = useRouter();
  const { searchID } = router.query;
  const { data: shirt, isLoading, error } = useSWR(`/api/${searchID}`, fetcher);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  return (
    <>
      {shirt.map((shirt) => (
        <FourPicsContainer key={shirt._id}>
          <StyledA href={`/PreviewPage/${shirt.picSRC1}`}>
            <StyledImage
              alt="image number 1"
              src={shirt.picSRC1}
              width="400"
              height="400"
              $fourpictures
            />
          </StyledA>
          <StyledA href={`/PreviewPage/${shirt.picSRC2}`}>
            <StyledImage
              $fourpictures
              alt="image number 2"
              src={shirt.picSRC2}
              width="400"
              height="400"
            />
          </StyledA>
          <StyledA href={`/PreviewPage/${shirt.picSRC3}`}>
            <StyledImage
              $fourpictures
              alt="image number 3"
              src={shirt.picSRC3}
              width="400"
              height="400"
            />
          </StyledA>
          <StyledA href={`/PreviewPage/${shirt.picSRC4}`}>
            <StyledImage
              $fourpictures
              alt="image number 4"
              src={shirt.picSRC4}
              width="400"
              height="400"
            />
          </StyledA>
        </FourPicsContainer>
      ))}
    </>
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
