import Text from "@/components/Text";
import { texts } from "../../data/text";
import FourPicsTable from "@/components/FourPicsTable";
import { Container } from "@/components/styledComponents/Container";

export default function ChooseFour() {
  return (
    <Container chooseFour>
      <Text texts={texts.chooseFourIntro} />
      <FourPicsTable />
      <Text texts={texts.chooseFourBottom} />
    </Container>
  );
}
