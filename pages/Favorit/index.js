import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/Container";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";
import { StyledButton } from "@/components/StyledButton";
import { useRouter } from "next/router";

export default function Favorit() {
  const [favPictures, setFavPictures] = useAtom(isFavorit);

  function unFavorit(picSRCSlugtoDelete) {
    setFavPictures(
      favPictures.filter((pic) => pic.picSRCSlug !== picSRCSlugtoDelete)
    );
  }

  return (
    <>
      <Header />
      <Container>
        {favPictures.map((pic) => (
          <>
            <PreviewPicture
              key={pic.picSRCSlug}
              imageSrc={pic.picSRC}
              imageName={pic.picSRCSlug}
            />
            <StyledButton onClick={() => unFavorit(pic.picSRCSlug)}>
              UnFavorite
            </StyledButton>
          </>
        ))}
      </Container>
    </>
  );
}
