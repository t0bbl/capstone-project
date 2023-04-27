import styled from "styled-components";
import Image from "next/image.js";
import { css } from "styled-components";

export const StyledImage = styled(Image)`
  width: 90vw;
  height: auto;
  ${(props) =>
    props.OneOfFourPictures &&
    css`
      width: 45vw;
      height: auto;
      background-color: #333;
      display: flex;
      margin: auto;
    `}
`;
