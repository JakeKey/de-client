import styled from "styled-components";

import colors from "styles/colors";

import FlexDiv from "components/FlexDiv";

export const Wrapper = styled(FlexDiv)`
  height: 80vh;
  background: ${colors.shamrock};
  margin: 5vh 5vw;
  padding: 5vh 5vw;
  border-radius: 20px;
`;
