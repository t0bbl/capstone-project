import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/Container";
import { StyledButton } from "@/components/StyledButton";
import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";

const fetcher = (url) => fetch(url).then((res) => res.json());

async function updateFavorite(picID, updatedData) {
  try {
    const response = await fetch(
      `/api/Favorites/alltimeFavorites/updateFavorites/${picID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getFavorite(picID) {
  try {
    const response = await fetch(`/api/Favorites/alltimeFavorites`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
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

  async function FavoriteImage(picSRCCloudinarySlug) {
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRCCloudinarySlug === picSRCCloudinarySlug
          ? { ...picture, isFavorite: true }
          : picture
      ),
      console.log(favPictures, "unfavPictures")
    );
  }

  async function unFavoriteImage(picSRCCloudinarySlug) {
    setFavPictures(
      favPictures.map((picture) =>
        picture.picSRCCloudinarySlug === picSRCCloudinarySlug
          ? { ...picture, isFavorite: false }
          : picture
      ),
      console.log(favPictures, "unfavPictures")
    );
  }

  return (
    <Container alltimeFavorites>
      {fetchedFavorites.map((pic) => {
        const shownPic = favPictures.find(
          (favPic) => favPic.picSRCCloudinary === pic.picSRCCloudinary
        );
        console.log(shownPic, "THIS IS SHOWN PIC");
        console.log(fetchedFavorites, "THIS IS FETCHED FAVS");

        return (
          <React.Fragment key={pic.picID}>
            <PreviewPicture
              imageSrc={pic.picSRCCloudinary}
              imageName={pic.picSRCCloudinarySlug}
            />
            {!shownPic?.isFavorite ? (
              <StyledButton
                type="button"
                onClick={() => FavoriteImage(pic.picSRCCloudinarySlug)}
              >
                FAVORITE
              </StyledButton>
            ) : (
              <StyledButton
                type="button"
                onClick={() => unFavoriteImage(pic.picSRCCloudinarySlug)}
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
