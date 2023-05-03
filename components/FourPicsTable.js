import { StyledImage } from "./StyledImage";
import { StyledA } from "./StyledLink";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import useSWR from "swr";

function sendRequest(url, { arg: data }) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

export default function FourPicsTable() {
  const router = useRouter();
  const searchID = router.query.searchID;
  const { data: shirt } = useSWR(
    `/api/Shirts?searchID=${searchID}`,
    sendRequest
  );
  if (!shirt) return <div>Loading...</div>;

  return (
    <FourPicsContainer>
      <StyledA href={`/PreviewPage/${shirt.picSRC1} || 'default-image.jpg'`}>
        <StyledImage
          alt="image number 1"
          src={
            shirt.picSRC1 ||
            "https://png.pngtree.com/png-clipart/20191120/original/pngtree-load-the-png-image_5054175.jpg"
          }
          width="400"
          height="400"
          $fourpictures
        />
      </StyledA>
      <StyledA href={`/PreviewPage/${shirt.picSRC2}`}>
        <StyledImage
          $fourpictures
          alt="image number 2"
          src={
            shirt.picSRC2 ||
            "https://png.pngtree.com/png-clipart/20191120/original/pngtree-load-the-png-image_5054175.jpg"
          }
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href={`/PreviewPage/${shirt.picSRC3}`}>
        <StyledImage
          $fourpictures
          alt="image number 3"
          src={
            shirt.picSRC3 ||
            "https://png.pngtree.com/png-clipart/20191120/original/pngtree-load-the-png-image_5054175.jpg"
          }
          width="400"
          height="400"
        />
      </StyledA>
      <StyledA href={`/PreviewPage/${shirt.picSRC4}`}>
        <StyledImage
          $fourpictures
          alt="image number 4"
          src={
            shirt.picSRC3 ||
            "https://png.pngtree.com/png-clipart/20191120/original/pngtree-load-the-png-image_5054175.jpg"
          }
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
