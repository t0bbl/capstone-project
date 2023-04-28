import Text, { texts } from "@/components/Text";

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
