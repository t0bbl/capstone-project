import { StyledA } from "./StyledLink";
import { StyledText } from "./StyledText";
import styled from "styled-components";

export default function Footer() {
  function goToHomePage() {
    window.location = "/";
  }
  function goToFavorites() {
    window.location = "/Favorit";
  }

  return (
    <FooterDiv>
      <StyledA>
        <FooterLinks onclick="history.back()">BACK</FooterLinks>
      </StyledA>
      <StyledA>
        <FooterLinks onClick={goToHomePage}>HOME</FooterLinks>
      </StyledA>
      <StyledA>
        <FooterLinks onClick={goToFavorites}>FAVORITES</FooterLinks>
      </StyledA>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(0deg, black 40%, rgba(255, 99, 71, 0));
`;

const FooterLinks = styled.h3`
  width: 100%;
  height: 100%;
  display: flex;
  font-weight: 800;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
  margin: 0;
  padding: 1rem 0rem;
  color: cyan;
`;
