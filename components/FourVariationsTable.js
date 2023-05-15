import { StyledImage } from "./StyledImage";
import { StyledA } from "./StyledLink";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "./Loading";
import Header from "./Header";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FourPicsTable() {
  const router = useRouter();
  const { searchID } = router.query;
  const {
    data: shirts,
    isLoading,
    error,
  } = useSWR(searchID ? `/api/${searchID}` : null, fetcher);

  if (isLoading || !shirts) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }
  if (error) {
    return <Loading />;
  }
  return (
    <>
      {shirts.map((shirt) => (
        <FourPicsContainer key={shirt.picSRC}>
          <StyledA
            href={`/PreviewPage/${searchID}/${shirt.variation1.picSRCSlug}?option=optionB&variant=variant1`}
          >
            <StyledImage
              alt="image number 1"
              src={shirt.variation1.picSRC}
              width="400"
              height="400"
              $fourpictures
            />
          </StyledA>
          <StyledA
            href={`/PreviewPage/${searchID}/${shirt.variation2.picSRCSlug}?option=optionB&variant=variant2`}
          >
            <StyledImage
              $fourpictures
              alt="image number 2"
              src={shirt.variation2.picSRC}
              width="400"
              height="400"
            />
          </StyledA>
          <StyledA
            href={`/PreviewPage/${searchID}/${shirt.variation3.picSRCSlug}?option=optionB&variant=variant3`}
          >
            <StyledImage
              $fourpictures
              alt="image number 3"
              src={shirt.variation3.picSRC}
              width="400"
              height="400"
            />
          </StyledA>
          <StyledA
            href={`/PreviewPage/${searchID}/${shirt.variation4.picSRCSlug}?option=optionB&variant=variant4`}
          >
            <StyledImage
              $fourpictures
              alt="image number 4"
              src={shirt.variation4.picSRC}
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
