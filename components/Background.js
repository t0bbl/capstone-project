import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Rand from "rand-seed";

const PixelSize = 40; // Size of a pixel (in pixels)

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

      // Calculate the actual width of each pixel to fill the entire width of the viewport
      const actualPixelWidth = viewportWidth / columns;
      setPixelWidth(actualPixelWidth);
    }

    // Initial update
    updatePixelCount();

    // Update on resize and scroll
    window.addEventListener("resize", updatePixelCount);
    window.addEventListener("scroll", updatePixelCount);

    // Cleanup
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
            height: `${PixelSize}px`,
          }}
        />
      ))}
    </PixelContainer>
  );
}

const PixelContainer = styled.div`
  position: absolute;
  z-index: -100;
  width: 100%;
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
