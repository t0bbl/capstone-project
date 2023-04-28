import Header from "../../components/Header";
import Text from "@/components/Text";
import ChooseFourVariations from "./[imageID]";
import { texts } from "../../data/text";

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
