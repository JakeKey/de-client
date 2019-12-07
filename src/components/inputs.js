import styled from 'styled-components';
import {colors} from '../styles/colors';
/*
export const Button = ({text, onClick}) => (

)*/

export const Button = styled.button`
  background: ${props => props.primary ? colors.gunmetal : colors.shamrock};
  color: ${props => props.primary ? colors.amber : colors.gunmetal};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;