import Header from "../../components/Header";
import Text from "@/components/Text";
import FourPicsTable from "@/components/FourPicsTable";
import { texts } from "../../data/text";

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
