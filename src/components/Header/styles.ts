import styled from "styled-components/macro";

import colors from "styles/colors";
import { breakpoints } from "utils/constants";

export const Wrapper = styled.div`
  grid-area: header;
  align-self: center;
  justify-self: center;
  color: ${colors.blue};
  font-size: 20px;

  @media only screen and (max-width: ${breakpoints.sm.width}) {
    font-size: 13px;
  }
`;
