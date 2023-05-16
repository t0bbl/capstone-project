import styled from "styled-components";
import { StyledA } from "./StyledLink";

const Headline = styled.h1`
  width: 120%;
  height: 120%;
  display: flex;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-size: 5vh;
  margin: 0;
  padding: 1rem 0rem;
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
