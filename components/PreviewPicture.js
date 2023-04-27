import { StyledImage } from "./StyledImage";

export default function PreviewPicture({ imageSrc, imageName }) {
  return (
    <StyledImage
      alt="image number 4"
      src={imageSrc}
      name={imageName}
      width="400"
      height="400"
    />
  );
}
