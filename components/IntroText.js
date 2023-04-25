import styled from "styled-components";

const introText =
  "Give us three Keywords for our AI to SH!T YOUR AI UP. or sth, idunnu, whoami";

const Intro = styled.p`
  color: teal;
  margin: 20% 5%;
`;

export default function IntroText() {
  return <Intro>{introText}</Intro>;
}
