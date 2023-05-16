import Header from "../../components/Header";
import PreviewPicture from "../../components/PreviewPicture";
import { Container } from "../../components/Container";
import { useAtom } from "jotai";
import { isFavorit } from "../../store/isFavorit";

export default function Favorit() {
  const [favPictures, setFavPictures] = useAtom(isFavorit);

  return (
    <>
      <Header />
      <Container>
        {favPictures.map((pic) => (
          <PreviewPicture
            key={pic.picSRCSlug}
            imageSrc={pic.picSRC}
            imageName={pic.picSRCSlug}
          />
        ))}
      </Container>
    </>
  );
}
