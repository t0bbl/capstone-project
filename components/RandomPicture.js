import { StyledImage } from "./StyledImage";

export default function RandomPicture({ src }) {
  return <StyledImage alt="random image" src={src} width="400" height="400" />;
}
