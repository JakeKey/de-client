import { createGlobalStyle } from "styled-components/macro";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarabun|Telex&display=swap');

  * {
    font-family: Sarabun;
  }

  body {
    background-color: ${colors.dark_gray}
  }

  ::placeholder {
    color: ${colors.dark_gray};
  }
`;
