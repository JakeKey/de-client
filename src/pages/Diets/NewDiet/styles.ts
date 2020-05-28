import styled from "styled-components/macro";

import colors from "styles/colors";
import { breakpoints } from "utils/constants";

import { MAIN_COL_WIDTH, MAIN_ADD_COL_WIDTH } from "components/Layout/styles";
import GridItem from "components/GridItem";
import Button from "components/Button";

const SUB_HEADER_HEIGHT = "50px";

export const NewDietLayout = styled.main`
  display: grid;
  grid-template-columns: minmax(${MAIN_COL_WIDTH}, 1fr) repeat(
      auto-fit,
      minmax(${MAIN_ADD_COL_WIDTH}, 1fr)
    );
  grid-template-rows: ${SUB_HEADER_HEIGHT} repeat(2, 1fr);
  overflow: auto;
  height: 100%;

  @media only screen and (max-width: ${breakpoints.sm.width}) {
    grid-template-rows: ${SUB_HEADER_HEIGHT} repeat(3, 1fr);
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SubHeader = styled(GridItem)`
  & > h2 {
    color: ${colors.dark_blue};
    font-size: 20px;
  }
`;

export const DietData = styled.div`
  grid-row-end: span 2;

  @media only screen and (max-width: ${breakpoints.sm.width}) {
    grid-row-end: auto;
  }
`;

export const BackButton = styled(Button)`
  @media only screen and (max-width: ${breakpoints.sm.width}) {
    align-self: stretch;
  }
`;
