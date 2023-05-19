import Text from "@/components/Text";
import { texts } from "../../data/text";
import FourVariationsTable from "@/components/FourVariationsTable";

export default function ChooseFourVariations() {
  return (
    <>
      <Text texts={texts.variations} />
      <FourVariationsTable />
      <Text texts={texts.chooseFourBottom} />
    </>
  );
}
