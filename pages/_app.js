import GlobalStyle from "../styles";
import Background from "@/components/Background";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {

  return (
    <>
      <Background />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
