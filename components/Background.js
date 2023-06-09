import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Rand from "rand-seed";

const PixelSize = 40;

export default function Background() {
  const [pixelCount, setPixelCount] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [pixelWidth, setPixelWidth] = useState(PixelSize);

  useEffect(() => {
    function updatePixelCount() {
      const viewportWidth = window.innerWidth;
      const documentHeight = Math.max(
        window.innerHeight,
        document.body.scrollHeight
      );

      const columns = Math.ceil(viewportWidth / PixelSize);
      const rows = Math.ceil(documentHeight / PixelSize);

      const n = columns * rows;

      setPixelCount(n);
      setDocumentHeight(documentHeight);

      const actualPixelWidth = viewportWidth / columns;
      setPixelWidth(actualPixelWidth);
    }

    updatePixelCount();

    window.addEventListener("resize", updatePixelCount);
    window.addEventListener("scroll", updatePixelCount);

    return () => {
      window.removeEventListener("resize", updatePixelCount);
      window.removeEventListener("scroll", updatePixelCount);
    };
  }, []);

  const rand = new Rand("thisisAIPOWER");

  return (
    <PixelContainer style={{ height: `${documentHeight}px` }}>
      {[...Array(pixelCount)].map((_, index) => (
        <Pixel
          key={index}
          style={{
            animationDelay: `${Math.ceil(rand.next() * 5000)}ms`,
            width: `${pixelWidth}px`,
            height: `${pixelWidth}px`,
          }}
        />
      ))}
    </PixelContainer>
  );
}

const PixelContainer = styled.div`
  position: absolute;
  z-index: -100;
  width: 102%;
  top: 0;
  left: 0;
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
  float: left;
  opacity: 0;
  animation-name: ${blink};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
