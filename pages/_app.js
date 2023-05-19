import GlobalStyle from "../styles";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Background />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
