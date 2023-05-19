import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/Container";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";
import { StyledButton } from "@/components/StyledButton";
import React from "react";

export default function Favorit() {
  const [favPictures, setFavPictures] = useAtom(isFavorit);

  function unFavorit(picSRC) {
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRC === picSRC
          ? { ...picture, isFavorite: !picture.isFavorite }
          : picture
      )
    );
  }

  return (
    <Container>
      {favPictures
        .filter((pic) => pic.isFavorite)
        .map((pic) => (
          <React.Fragment key={pic.picSRCSlug}>
            <PreviewPicture imageSrc={pic.picSRC} imageName={pic.picSRCSlug} />
            <StyledButton onClick={() => unFavorit(pic.picSRC)}>
              UnFavorite
            </StyledButton>
          </React.Fragment>
        ))}
    </Container>
  );
}
