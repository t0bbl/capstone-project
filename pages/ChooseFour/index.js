import Header from "../../components/Header";
import Text, { texts } from "@/components/Text";

export default function ChooseFour() {
  return (
    <>
      <Header />
      <Text texts={texts.ChooseFourIntro} />
      <Text texts={texts.ChooseFourBottom} />
    </>
  );
}
