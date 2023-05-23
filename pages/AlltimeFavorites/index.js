import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/styledComponents/Container";
import { StyledButton } from "@/components/styledComponents/StyledButton";
import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading";
import { useAtom } from "jotai";
import { isFavoriteState } from "../../store/isFavoriteState";
import updateFavorites from "../../lib/updateFavorites";
import { StyledA } from "../../components/styledComponents/StyledLink";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AlltimeFavorites() {
  const [favPictures, setFavPictures] = useAtom(isFavoriteState);

  const {
    data: fetchedFavorites,
    isLoading,
    error,
  } = useSWR(`/api/favorites/alltimefavorites/allFavorites`, fetcher);

  if (isLoading || !fetchedFavorites) {
    return <Loading />;
  }
  if (error) {
    return <div>error...</div>;
  }

  async function favoriteImage(
    picSRCCloudinary,
    picSRCCloudinarySlug,
    picID,
    increaseFavorites
  ) {
    await updateFavorites(picSRCCloudinary, picID, increaseFavorites);
    if (!favPictures.some((picture) => picture.picID === picID)) {
      setFavPictures([
        {
          picID: picID,
          picSRCCloudinary: picSRCCloudinary,
          picSRCCloudinarySlug: picSRCCloudinarySlug,
          isFavorite: true,
          favorites: 1,
        },
        ...favPictures,
      ]);
    } else {
      setFavPictures(
        favPictures.map((picture) =>
          picture.picID === picID ? { ...picture, isFavorite: true } : picture
        )
      );
    }
  }

  async function unFavoriteImage(picSRCCloudinary, picID, decreaseFavorites) {
    await updateFavorites(picSRCCloudinary, picID, decreaseFavorites);
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRCCloudinary === picSRCCloudinary
          ? { ...picture, isFavorite: false }
          : picture
      )
    );
  }

  return (
    <Container alltimeFavorites>
      {fetchedFavorites
        .filter((pic) => pic.favorites >= 1)
        .map((pic) => {
          const shownPic = favPictures.find(
            (favPic) => favPic.picSRCCloudinary === pic.picSRCCloudinary
          );

          return (
            <React.Fragment key={pic.picID}>
              <StyledA
                href={`/PreviewPage/${pic.picID}/${pic.picSRCCloudinarySlug}?option=optionB&variant=variant2`}
              >
                <PreviewPicture
                  imageSrc={pic.picSRCCloudinary}
                  imageName={pic.picSRCCloudinarySlug}
                />
              </StyledA>
              {!shownPic?.isFavorite ? (
                <StyledButton
                  type="button"
                  onClick={() =>
                    favoriteImage(
                      pic.picSRCCloudinary,
                      pic.picSRCCloudinarySlug,
                      pic.picID,
                      "increaseFavorites"
                    )
                  }
                >
                  FAVORITE
                </StyledButton>
              ) : (
                <StyledButton
                  type="button"
                  onClick={() =>
                    unFavoriteImage(
                      pic.picSRCCloudinary,
                      pic.picID,
                      "decreaseFavorites"
                    )
                  }
                  clicked
                >
                  unFAVORITE
                </StyledButton>
              )}
            </React.Fragment>
          );
        })}
    </Container>
  );
}
