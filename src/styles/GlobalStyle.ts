import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarabun|Telex&display=swap');

  * {
    font-family: Sarabun;
    align-content: center;
  }

  body {
    background-color: ${colors.gunmetal}
  }

  ::placeholder {
    color: ${colors.gunmetal};
    opacity: 0.7; 
  }
`;
