import styled from "styled-components/macro";

import colors from "styles/colors";

import FlexDiv from "components/FlexDiv";

export const Wrapper = styled(FlexDiv)`
  background-color: ${colors.shamrock};
  margin: 10vh 30vw;
  padding: 5vh 5vw;
  border-radius: 20px;
`;

export const Title = styled.h1`
  color: ${colors.dark_blue};
  text-align: center;
`;

export const LoginForm = styled.form`
  background-color: ${colors.magicMint};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
  border: 2px solid ${colors.paleVioletRed};
  border-radius: 20px;
`;
