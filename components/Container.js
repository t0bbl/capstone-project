import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
