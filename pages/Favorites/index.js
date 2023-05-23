import PreviewPicture from "../../components/PreviewPicture";
import { StyledA } from "../../components/styledComponents/StyledLink";
import { Container } from "../../components/styledComponents/Container";
import { useAtom } from "jotai";
import { isFavoriteState } from "../../store/isFavoriteState";
import { StyledButton } from "@/components/styledComponents/StyledButton";
import React from "react";
import updateFavorites from "../../lib/updateFavorites";

export default function Favorit() {
  const [favPictures, setFavPictures] = useAtom(isFavoriteState);

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
            <StyledA href={`/previewPage/${pic.picID}`}>
              <PreviewPicture
                imageSrc={pic.picSRCCloudinary}
                imageName={pic.picSRCCloudinarySlug}
              />
            </StyledA>
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
