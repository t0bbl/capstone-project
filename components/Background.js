import styled, { keyframes } from "styled-components";
import Rand from "rand-seed";

const n = 800; // Or something else

const seed = "anything";

export default function Background() {
  const rand = new Rand("thisisAIPOWER");
  return (
    <PixelContainer>
      {[...Array(n)].map((_, index) => (
        <Pixel
          key={index}
          style={{ animationDelay: Math.ceil(rand.next() * 5000) + "ms" }}
        />
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
