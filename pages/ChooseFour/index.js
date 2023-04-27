import Header from "../../components/Header";
import Text, { texts } from "@/components/Text";
import ChooseFourPics from "@/components/ChooseFourPics";

export default function ChooseFour() {
  return (
    <>
      <Header />
      <Text texts={texts.ChooseFourIntro} />
      <ChooseFourPics />
      <Text texts={texts.ChooseFourBottom} />
    </>
  );
}
