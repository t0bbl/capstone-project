import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background-image: linear-gradient(135deg, teal 40%, indigo);
  padding: 0.8rem;
  color: yellow;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  transform: skew(10deg);
  &:active {
    box-shadow: 2px 2px 5px indigo;
  }
`;
