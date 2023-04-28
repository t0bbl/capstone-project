import styled, { css } from "styled-components";
import Image from "next/image.js";

export const StyledImage = styled(Image)`
  width: 90vw;
  height: auto;
  ${(props) =>
    props.oneOfFourPictures &&
    css`
      width: 45vw;
      height: auto;
      background-color: #333;
      display: flex;
      margin: auto;
    `}
`;
