import { StyledImage } from "./StyledImage";
import { StyledA } from "./StyledLink";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "./Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FourPicsTable() {
  const router = useRouter();
  const { picID } = router.query;
  const {
    data: shirts,
    isLoading,
    error,
  } = useSWR(picID ? `/api/${picID}` : null, fetcher);

  if (isLoading || !shirts) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <div>error...</div>;
  }
  console.log(shirts);
  return (
    <>
      {shirts.map((shirt) => (
        <FourPicsContainer key={shirt._id}>
          <StyledA href={`/PreviewPage/${picID}/${shirt.pic1.picSRCSlug}`}>
            <StyledImage
              alt="image number 1"
              src={shirt.pic1.picSRC}
              width="400"
              height="400"
              $fourpictures
            />
          </StyledA>
          <StyledA href={`/PreviewPage/${picID}/${shirt.pic2.picSRCSlug}`}>
            <StyledImage
              alt="image number 2"
              src={shirt.pic2.picSRC}
              width="400"
              height="400"
              $fourpictures
            />
          </StyledA>
          <StyledA href={`/PreviewPage/${picID}/${shirt.pic3.picSRCSlug}`}>
            <StyledImage
              alt="image number 3"
              src={shirt.pic3.picSRC}
              width="400"
              height="400"
              $fourpictures
            />
          </StyledA>
          <StyledA href={`/PreviewPage/${picID}/${shirt.pic4.picSRCSlug}`}>
            <StyledImage
              alt="image number 4"
              src={shirt.pic4.picSRC}
              width="400"
              height="400"
              $fourpictures
            />
          </StyledA>
        </FourPicsContainer>
      ))}
    </>
  );
}

const FourPicsContainer = styled.div`
  background-color: none;
  display: grid;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  justify-content: space-evenly;
`;
