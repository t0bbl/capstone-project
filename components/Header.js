import styled from "styled-components";
import { StyledA } from "./styledComponents/StyledLink";

const Headline = styled.h1`
  position: fixed;
  height: 10vh;
  width: 100%;
  display: flex;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-size: 5vh;
  margin: 0;
  z-index: 100;
  color: cyan;
  background-image: linear-gradient(135deg, black 40%, rgba(255, 99, 71, 0));
`;

export default function Header() {
  return (
    <StyledA href={"/"}>
      <Headline>AiMySh!rtUp</Headline>
    </StyledA>
  );
}
