import Header from "../components/Header";
import Form from "../components/Form";
import Text, { texts } from "../components/Text";

export default function HomePage() {
  return (
    <>
      <Header />
      <Text texts={texts.intro} />
      <Form />
    </>
  );
}
