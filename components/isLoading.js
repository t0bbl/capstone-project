import { keyframes } from "styled-components";
import styled from "styled-components";

export default function IsLoading() {
  return (
    <div>
      <LoadingText>... Is Loading ... </LoadingText>
    </div>
  );
}

const pulse = keyframes`
    0%{color:rgba(0,255,255);}	
      110%{color: black;}
  `;

export const LoadingText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  animation-name: ${pulse};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
