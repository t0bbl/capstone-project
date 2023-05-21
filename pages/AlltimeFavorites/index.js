import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/Container";
import { StyledButton } from "@/components/StyledButton";
import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading";
import { useAtom } from "jotai";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AlltimeFavorites() {
  const {
    data: favorites,
    isLoading,
    error,
  } = useSWR(`/api/Favorites/alltimeFavorites`, fetcher);

  console.log("favorites:", favorites);

  if (isLoading || !favorites) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return <div>error...</div>;
  }

  return (
    <Container>
      {favorites.map((pic) => (
        <React.Fragment key={pic.picID}>
          <PreviewPicture
            imageSrc={pic.picSRCCloudinary}
            imageName={pic.picSRCCloudinarySlug}
          />
          <StyledButton onClick={() => unFavorit(pic.picSRCCloudinary)}>
            UnFavorite
          </StyledButton>
        </React.Fragment>
      ))}
    </Container>
  );
}
