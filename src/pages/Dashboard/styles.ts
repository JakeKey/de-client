import styled from "styled-components/macro";

import colors from "styles/colors";

import FlexDiv from "components/FlexDiv";

const LAYOUT_HEIGHT = "90vh";

export const Wrapper = styled(FlexDiv)`
  height: ${LAYOUT_HEIGHT};
  background: ${colors.shamrock};
  margin: calc((100vh - ${LAYOUT_HEIGHT}) / 2) 5vw;
  padding: 0 5vw;
  border-radius: 20px;
`;
