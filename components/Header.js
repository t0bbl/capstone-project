import styled, { css } from "styled-components";

const Head = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid teal;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem 0rem;
  color: teal;
  background-color: yellow;
`;

export default function Header() {
  return (
    <div>
      <Head>AiMySh!rtUp</Head>
    </div>
  );
}
