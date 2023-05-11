import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
   body {
    width: 100%;  
    height: 100%;
    margin: 0;    
    padding: 0;
    background: black;
    overflow: hidden;
  }
  

`;
