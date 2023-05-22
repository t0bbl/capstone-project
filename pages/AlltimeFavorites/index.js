import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/styledComponents/Container";
import { StyledButton } from "@/components/styledComponents/StyledButton";
import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";

const fetcher = (url) => fetch(url).then((res) => res.json());

async function increaseFavtoMongoDB(picSRCCloudinary, picID) {
  await fetch(`/api/Favorites/alltimeFavorites/increaseFavorites/${picID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ picSRCCloudinary }),
  });

  return;
}

async function decreaseFavtoMongoDB(picSRCCloudinary, picID) {
  await fetch(`/api/Favorites/alltimeFavorites/decreaseFavorites/${picID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ picSRCCloudinary }),
  });

  return;
}

export default function AlltimeFavorites() {
  const [favPictures, setFavPictures] = useAtom(isFavorit);

  const {
    data: fetchedFavorites,
    isLoading,
    error,
  } = useSWR(`/api/Favorites/alltimeFavorites`, fetcher);

  if (isLoading || !fetchedFavorites) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return <div>error...</div>;
  }

  async function FavoriteImage(picSRCCloudinarySlug, picSRCCloudinary, picID) {
    await increaseFavtoMongoDB(picSRCCloudinary, picID);
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRCCloudinarySlug === picSRCCloudinarySlug
          ? { ...picture, isFavorite: true }
          : picture
      )
    );
  }

  async function unFavoriteImage(
    picSRCCloudinarySlug,
    picSRCCloudinary,
    picID
  ) {
    await decreaseFavtoMongoDB(picSRCCloudinary, picID);
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
      {fetchedFavorites.map((pic) => {
        const shownPic = favPictures.find(
          (favPic) => favPic.picSRCCloudinary === pic.picSRCCloudinary
        );

        return (
          <React.Fragment key={pic.picID}>
            <PreviewPicture
              imageSrc={pic.picSRCCloudinary}
              imageName={pic.picSRCCloudinarySlug}
            />
            {!shownPic?.isFavorite ? (
              <StyledButton
                type="button"
                onClick={() =>
                  FavoriteImage(
                    pic.picSRCCloudinarySlug,
                    pic.picSRCCloudinary,
                    pic.picID
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
                    pic.picSRCCloudinarySlug,
                    pic.picSRCCloudinary,
                    pic.picID
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
