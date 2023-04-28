import Header from "../../components/Header";
import Text from "@/components/Text";
import { texts } from "../../data/text";
import FourPicsTable from "@/components/ChooseFourPics";

export default function ChooseFour() {
  return (
    <>
      <Header />
      <Text texts={texts.ChooseFourIntro} />
      <FourPicsTable />
      <Text texts={texts.ChooseFourBottom} />
    </>
  );
}
