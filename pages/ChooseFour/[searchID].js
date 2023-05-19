import Text from "@/components/Text";
import { texts } from "../../data/text";
import FourPicsTable from "@/components/FourPicsTable";

export default function ChooseFour() {
  return (
    <>
      <Text texts={texts.chooseFourIntro} />
      <FourPicsTable />
      <Text texts={texts.chooseFourBottom} />
    </>
  );
}
