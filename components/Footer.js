import { StyledA } from "./StyledLink";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  function goToHomePage() {
    window.location = "/";
  }
  function goToFavorites() {
    window.location = "/Favorites";
  }

  return (
    <FooterDiv>
      <StyledA onClick={() => router.back()}>
        <FooterLinks>BACK</FooterLinks>
      </StyledA>
      <StyledA onClick={goToHomePage}>
        <FooterLinks>HOME</FooterLinks>
      </StyledA>
      <StyledA onClick={goToFavorites}>
        <FooterLinks>FAVORITES</FooterLinks>
      </StyledA>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
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
