import Header from "../components/Header";
import Form from "../components/Form";
import Text from "../components/Text";
import Footer from "../components/Footer";
import { texts } from "../data/text";
import { useAtom } from "jotai";
import IsLoading from "../components/Loading";
import { loading } from "../store/isLoading";

export default function HomePage() {
  const [isLoadingState] = useAtom(loading);

  if (isLoadingState) {
    return (
      <>
        <Header />
        <IsLoading />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Text texts={texts.intro} />
        <Form />
        <Footer />
      </>
    );
  }
}
