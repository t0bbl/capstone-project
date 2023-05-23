import Form from "../components/Form";
import Text from "../components/Text";
import { texts } from "../data/text";
import { useAtom } from "jotai";
import IsLoading from "../components/Loading";
import { loading } from "../store/isLoading";
import { Container } from "../components/styledComponents/Container";

export default function HomePage() {
  const [isLoadingState] = useAtom(loading);

  if (isLoadingState) {
    return (
      <Container>
        <IsLoading />
      </Container>
    );
  } else {
    return (
      <Container>
        <Text texts={texts.intro} />
        <Form />
      </Container>
    );
  }
}
