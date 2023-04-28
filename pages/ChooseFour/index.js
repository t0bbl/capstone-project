import Header from "../../components/Header";
import Text, { texts } from "@/components/Text";
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
