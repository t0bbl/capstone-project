import styled from "styled-components";
import { StyledA } from "./StyledLink";

const Headline = styled.h1`
  width: 120%;
  height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid lightgray;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem 0rem;
  color: cyan;
  background-image: linear-gradient(135deg, gray 40%, black);
`;

export default function Header() {
  return (
    <StyledA href={"/"}>
      <Headline>AiMySh!rtUp</Headline>
    </StyledA>
  );
}
