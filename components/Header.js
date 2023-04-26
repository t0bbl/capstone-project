import styled from "styled-components";
import { StyledA } from "./StyledLink";

const Headline = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid teal;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem 0rem;
  color: yellow;
  background-image: linear-gradient(135deg, teal 40%, indigo);
`;

export default function Header() {
  return (
    <StyledA href={"/"}>
      <Headline>AiMySh!rtUp</Headline>
    </StyledA>
  );
}
