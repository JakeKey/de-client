import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarabun|Telex&display=swap');

  * {
    font-family: Sarabun;
    background: ${props => props.theme.background};
    align-content: center;
  }

  ::placeholder {
    color: ${colors.gunmetal};
    opacity: 0.7; 
  }
`