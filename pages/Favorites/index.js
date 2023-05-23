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

  async function unFavoriteImage(
    picSRCCloudinary,
    picSRCCloudinarySlug,
    picID,
    decreasefavorites
  ) {
    await updateFavorites(picSRCCloudinary, picID, decreasefavorites);

    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRCCloudinarySlug === picSRCCloudinarySlug
          ? { ...picture, isFavorite: false }
          : picture
      )
    );
  }

  return (
    <Container alltimeFavorites>
      {favPictures
        .filter((pic) => pic.isFavorite)
        .map((pic) => (
          <React.Fragment key={pic.picSRCCloudinarySlug}>
            <StyledA
              href={`/PreviewPage/${pic.picID}/${pic.picSRCCloudinarySlug}?option=optionB&variant=variant2`}
            >
              <PreviewPicture
                imageSrc={pic.picSRCCloudinary}
                imageName={pic.picSRCCloudinarySlug}
              />
            </StyledA>
            <StyledButton
              onClick={() =>
                unFavoriteImage(
                  pic.picSRCCloudinary,
                  pic.picSRCCloudinarySlug,
                  pic.picID,
                  "decreasefavorites"
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
