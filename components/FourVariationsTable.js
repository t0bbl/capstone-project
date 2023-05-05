import { StyledImage } from "./StyledImage";
import { StyledA } from "./StyledLink";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FourPicsTable() {
  const router = useRouter();
  const { searchID } = router.query;
  const {
    data: shirts,
    isLoading,
    error,
  } = useSWR(searchID ? `/api/ChooseVariation/${searchID}` : null, fetcher);

  if (isLoading || !shirts) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  return (
    <>
      <FourPicsContainer key={shirts.picSRC}>
        <StyledA href={`/PreviewPage/${shirts.variant1slug}?option=optionB`}>
          <StyledImage
            alt="image number 1"
            src={shirts.variant1}
            width="400"
            height="400"
            $fourpictures
          />
        </StyledA>
        <StyledA href={`/PreviewPage/${shirts.variant2slug}?option=optionB`}>
          <StyledImage
            $fourpictures
            alt="image number 2"
            src={shirts.variant2}
            width="400"
            height="400"
          />
        </StyledA>
        <StyledA href={`/PreviewPage/${shirts.variant3slug}?option=optionB`}>
          <StyledImage
            $fourpictures
            alt="image number 3"
            src={shirts.variant3}
            width="400"
            height="400"
          />
        </StyledA>
        <StyledA href={`/PreviewPage/${shirts.variant4slug}?option=optionB`}>
          <StyledImage
            $fourpictures
            alt="image number 4"
            src={shirts.variant4}
            width="400"
            height="400"
          />
        </StyledA>
      </FourPicsContainer>
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
