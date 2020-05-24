import styled from "styled-components/macro";

import { breakpoints } from "utils/constants";

export const MAIN_COL_WIDTH = "245px";
export const NAV_WIDTH = "200px";
const HEADER_HEIGHT = "50px";
const FOOTER_HEIGHT = "65px";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: ${HEADER_HEIGHT} minmax(0, 1fr) ${FOOTER_HEIGHT};
  grid-template-columns: ${NAV_WIDTH} minmax(0, 1fr);
  grid-template-areas: ". header" "nav main" ". footer";
  grid-gap: 10px;
  width: 100%;
  max-height: 100%;

  @media only screen and (max-width: ${breakpoints.md.width}) {
    grid-template-columns: 50px minmax(0, 1fr);
    grid-template-areas: "nav header" "main main" "main main" "footer footer";
  }
`;
