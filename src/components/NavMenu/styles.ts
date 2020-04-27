import styled from "styled-components/macro";

import FlexDiv from "components/FlexDiv";
import { HEADER_HEIGHT } from "components/Layout/styles";

export const Wrapper = styled(FlexDiv)`
  width: 20vw;
  padding-top: ${HEADER_HEIGHT};
`;
