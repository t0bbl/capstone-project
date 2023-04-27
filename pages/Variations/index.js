import Header from "../../components/Header";
import Text, { texts } from "@/components/Text";
import ChooseFourVariations from "./[imageID]";

export default function ChooseFour() {
  return (
    <>
      <Header />
      <Text texts={texts.ChooseFourIntro} />
      <ChooseFourVariations />
      <Text texts={texts.ChooseFourBottom} />
    </>
  );
}
