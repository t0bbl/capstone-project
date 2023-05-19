import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  width: fit-content;
  padding: 0.8rem;
  color: cyan;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  box-shadow: 2px 2px 10px cyan;
  &:active {
    box-shadow: 2px 2px 20px cyan;
  }
  ${(props) =>
    props.generate &&
    css`
      display: flex;
      align-self: flex-end;
      margin-top: 40px;
      margin-right: 20px;
      transform: skew(10deg);
    `}
  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}
    ${(props) =>
    props.clicked &&
    css`
      background-color: lightcyan;
    `}
`;
