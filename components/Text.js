import { StyledText } from "./StyledText";
import { useState } from "react";

export const texts = {
  intro:
    "Give us three Keywords for our AI to SH!T YOUR AI UP. or sth, idunnu, whoami",

  ChooseFourIntro: "Choose your Style!",

  ChooseFourBottom:
    "Click on the one you like the most to see it in Detail and get more Options.",
};
export default function Text({ texts }) {
  return <StyledText>{texts}</StyledText>;
}
