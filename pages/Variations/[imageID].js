import Text from "@/components/Text";
import { texts } from "../../data/text";

import FourPicsTable from "@/components/FourPicsTable";
import Header from "@/components/Header";

export default function ChooseFourVariations() {
  return (
    <>
      <Header />
      <Text texts={texts.Variations} />
      <FourPicsTable />
      <Text texts={texts.ChooseFourBottom} />
    </>
  );
}
