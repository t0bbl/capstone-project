import { StyledButton } from "@/components/StyledButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { saveAs } from "file-saver";
import { css } from "styled-components";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PreviewPage() {
  const router = useRouter();
  const { searchID } = router.query;
  const {
    data: shirts,

    error,
  } = useSWR(`/api/ChooseVariation/${searchID}`, fetcher);
  const isLoading = !shirts && !error;
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }

  const downloadImage = () => {
    saveAs(shirts.picSRC, shirts.picSRCSlugJPG);
  };

  function handlePrint() {
    alert("you printed your Shirt!");
  }
  console.log(shirts.picSRC);
  return (
    <>
      <Header />
      <Container>
        <PreviewPicture
          key={shirts.picSRCSlug}
          imageSrc={shirts.picSRC}
          imageName={shirts.picSRCSlug}
        />
        <StyledButton
          type="button"
          //onClick={handleVariations}
          center
        >
          Give me Variations!
        </StyledButton>
      </Container>
      <Container bottomButtons>
        <StyledButton type="button" onClick={downloadImage}>
          SAVE
        </StyledButton>
        <StyledButton type="button" onClick={handlePrint}>
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

  ${(props) =>
    props.bottomButtons &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    `}
`;
