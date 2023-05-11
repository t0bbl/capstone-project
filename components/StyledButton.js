import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-image: linear-gradient(135deg, gray 40%, black);
  padding: 0.8rem;
  color: cyan;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  transform: skew(10deg);
  box-shadow: 2px 2px 5px gray;
  &:active {
    box-shadow: 2px 2px 5px cyan;
  }
  ${(props) =>
    props.generate &&
    css`
      position: absolute;
      bottom: 1vw;
      right: 1vw;
    `}
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
