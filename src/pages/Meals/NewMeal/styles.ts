import styled from "styled-components/macro";

import { breakpoints } from "utils/constants";

import { MAIN_COL_WIDTH, MAIN_ADD_COL_WIDTH } from "components/Layout/styles";

export const NewMealLayout = styled.main`
  display: grid;

  grid-template-columns: minmax(${MAIN_COL_WIDTH}, 1fr) repeat(
      auto-fit,
      minmax(${MAIN_ADD_COL_WIDTH}, 1fr)
    );
  grid-template-rows: repeat(2, 1fr);
  overflow: auto;
  height: 100%;

  @media only screen and (max-width: ${breakpoints.sm.width}) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const MealData = styled.div`
  grid-row-end: span 2;

  @media only screen and (max-width: ${breakpoints.sm.width}) {
    grid-row-end: auto;
  }
`;
