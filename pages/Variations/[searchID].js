import Text from "@/components/Text";
import { texts } from "../../data/text";
import FourVariationsTable from "@/components/FourVariationsTable";
import Header from "@/components/Header";

export default function ChooseFourVariations() {
  return (
    <>
      <Header />
      <Text texts={texts.variations} />
      <FourVariationsTable />
      <Text texts={texts.chooseFourBottom} />
    </>
  );
}
