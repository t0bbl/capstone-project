import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 120%;
  height: 120%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10vh;
  gap: 8vh;

  ${(props) =>
    props.bottomButtons &&
    css`
      flex-direction: row;
    `}
`;
