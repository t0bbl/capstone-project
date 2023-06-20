import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 15vh);
  /* position: absolute; */
  position: relative;
  top: 15vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2vh 3vw;

  ${(props) =>
    props.bottomButtons &&
    css`
      flex-direction: row;
      margin-top: 15vh;
      justify-content: space-evenly;
    `}
  ${(props) =>
    props.chooseFour &&
    css`
      position: relative;
      flex-direction: row;
      justify-content: space-evenly;
      top: 10vh;
      height: 70%;
    `}
    ${(props) =>
    props.preview &&
    css`
      flex-direction: row;
      justify-content: space-evenly;
      align-content: center;
      margin-top: 10vh;
      button {
        min-width: 30%;
      }
    `}
    ${(props) =>
    props.alltimeFavorites &&
    css`
      padding-bottom: 100px;
    `}
    ${(props) =>
    props.formButtons &&
    css`
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;
    `}
`;

export const DesktopContainer = styled.div`
  @media (max-width: 449px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  @media (min-width: 450px) {
    display: none;
  }
`;