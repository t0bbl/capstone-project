import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
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
      position: absolute;
      bottom: 30px;
      right: 10px;
    `}
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
