import styled from 'styled-components';
import { colors } from '../styles/colors';

export const LoginFormWrapper = styled.div`
  background: ${'#dbf4ad'};
  display: flex;

  flex-direction: column; 
  align-content: center;
  padding: 5vh 5vw;
  border: 2px solid palevioletred;
  border-radius: 20px;
`;

export const LandingPageWrapper = styled.div`
  background: ${props => props.primary ? colors.gunmetal : colors.shamrock};
  display: flex;

  flex-direction: column; 
  align-content: center;
  margin: 10vh 30vw;
  padding: 5vh 5vw;
  border: 2px solid palevioletred;
  border-radius: 20px;
`;