import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/styledComponents/Container";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";
import { StyledButton } from "@/components/styledComponents/StyledButton";
import React from "react";
import updateFavorites from "../../components/updateFavorites";

export default function Favorit() {
  const [favPictures, setFavPictures] = useAtom(isFavorit);

  async function unFavoriteImage(picSRCCloudinary, picID, decreaseFavorites) {
    await updateFavorites(picSRCCloudinary, picID, decreaseFavorites);
    setFavPictures(
      favPictures.map((picture) =>
        picture.picID === picID ? { ...picture, isFavorite: false } : picture
      )
    );
  }

  return (
    <Container alltimeFavorites>
      {favPictures
        .filter((pic) => pic.isFavorite)
        .map((pic) => (
          <React.Fragment key={pic.picSRCCloudinarySlug}>
            <PreviewPicture
              imageSrc={pic.picSRCCloudinary}
              imageName={pic.picSRCCloudinarySlug}
            />
            <StyledButton
              onClick={() =>
                unFavoriteImage(
                  pic.picSRCCloudinary,
                  pic.picID,
                  "decreaseFavorites"
                )
              }
            >
              unFavorite
            </StyledButton>
          </React.Fragment>
        ))}
    </Container>
  );
}
