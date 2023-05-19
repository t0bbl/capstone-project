import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 15vh);
  position: absolute;
  top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2vh 3vw;

  ${(props) =>
    props.bottomButtons &&
    css`
      flex-direction: row;
      margin-top: 5vh;
    `}
`;
