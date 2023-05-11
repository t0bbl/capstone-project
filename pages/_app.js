import Background from "@/components/Background";
import GlobalStyle from "../styles";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const pix = document.getElementsByClassName("pixel");

    for (var i = 0; i < pix.length; i++) {
      pix[i].style.animationDelay = Math.ceil(Math.random() * 5000) + "ms";
    }
  });

  return (
    <>
      <Background />

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}
