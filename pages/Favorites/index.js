import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/Container";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";
import { StyledButton } from "@/components/StyledButton";
import { Clicked } from "../../store/Clicked";
import React from "react";
import { useRouter } from "next/router";

export default function Favorit() {
  const router = useRouter();
  const { searchID } = router.query;
  const [favPictures, setFavPictures] = useAtom(isFavorit);
  const [isClicked, setIsClicked] = useAtom(Clicked);

  const updateIsCLicked = () => {
    setIsClicked(!isClicked);
  };

  function unFavorit(picSRC) {
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRC === picSRC
          ? { ...picture, isFavorite: !picture.isFavorite }
          : picture
      )
    );
    updateIsCLicked();
  }

  return (
    <>
      <Header />
      <Container>
        {favPictures
          .filter((pic) => pic.isFavorite)
          .map((pic) => (
            <React.Fragment key={pic.picSRCSlug}>
              <PreviewPicture
                imageSrc={pic.picSRC}
                imageName={pic.picSRCSlug}
              />
              <StyledButton onClick={() => unFavorit(pic.picSRC)}>
                UnFavorite
              </StyledButton>
            </React.Fragment>
          ))}
      </Container>
    </>
  );
}
