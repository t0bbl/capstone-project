import Text from "@/components/Text";
import { texts } from "../../data/text";
import FourVariationsTable from "@/components/FourVariationsTable";
import { Container } from "@/components/Container";

export default function ChooseFourVariations() {
  return (
    <Container chooseFour>
      <Text texts={texts.variations} />
      <FourVariationsTable />
      <Text texts={texts.chooseFourBottom} />
    </Container>
  );
}
