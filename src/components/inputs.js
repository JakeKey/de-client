import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Link } from "react-router-dom";

export const Button = styled.button`
  background: ${props => props.primary ? colors.gunmetal : colors.shamrock};
  color: ${props => props.primary ? colors.amber : colors.gunmetal};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.paleVioletRed};
  border-radius: 20px;
  cursor: pointer;
`;

export const LoginInput = styled.input`
  background: #dab785;
  color: ${props => props.primary ? colors.amber : colors.gunmetal};
  
  text-align: center;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.paleVioletRed};
`;

export const StyledLink = styled(Link)`
  color: ${props => props.color ? props.color : 'inherit'};
  font-weight: ${props => props.bold && 'bold'};
  text-decoration: none;
  text-align: center;
`;