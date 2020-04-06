import styled from 'styled-components';
import { colors } from '../styles/colors';

const FlexDiv = styled.div`
  background: ${colors.shamrock};
  display: flex;
  flex-direction: column; 
  align-content: center;
  margin: 5vh 5vw;
  padding: 5vh 5vw;
  border-radius: 20px;
`;

export const LoginFormWrapper = styled.form`
  background: ${colors.magicMint};
  display: flex;
  flex-direction: column; 
  align-content: center;
  padding: 5vh 5vw;
  border: 2px solid ${colors.paleVioletRed};
  border-radius: 20px;
`;

export const LandingPageWrapper = styled(FlexDiv)`
  margin: 10vh 30vw;
`;

export const DashboardWrapper = styled(FlexDiv)`
  flex-direction: row; 
  height: 79vh;
`;

export const NavMenuWrapper = styled(FlexDiv)`
  margin: 0;
  padding: 0;
  height: 60vh;
  width: 20vw;
`;