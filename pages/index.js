import Header from "../components/Header";
import Form from "../components/Form";
import Text from "../components/Text";
import { useEffect } from "react";

import { texts } from "../data/text";

export default function HomePage() {
  return (
    <>
      <Header />
      <Text texts={texts.intro} />
      <Form />
    </>
  );
}
