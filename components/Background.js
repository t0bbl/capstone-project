import styled, { keyframes } from "styled-components";

const n = 800; // Or something else

export default function Background() {
  return (
    <PixelContainer>
      {[...Array(n)].map((e, i) => (
        <Pixel className="pixel" key={i}></Pixel>
      ))}
    </PixelContainer>
  );
}

const PixelContainer = styled.div`
  position: absolute;
  z-index: -100;
  width: 140%;
  height: 140%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

const blink = keyframes`
    0%    {opacity: 0.0;}
    25%   {opacity: 0.0;}
    50%   {opacity: 0.5;}
    100%  {opacity: 0.0;}
  `;

const Pixel = styled.div`
  background: white;
  width: 10%;
  padding-top: 10%;
  float: left;
  opacity: 0;
  animation-name: ${blink};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
