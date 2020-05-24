import styled, { CSSProperties } from "styled-components/macro";

import colors from "styles/colors";
import { breakpoints } from "utils/constants";

import { MAIN_COL_WIDTH } from "components/Layout/styles";

export const NewMealLayout = styled.main`
  display: grid;

  grid-template-columns: minmax(${MAIN_COL_WIDTH}, 1fr) repeat(
      auto-fit,
      minmax(160px, 1fr)
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

interface Arguments {
  margin?: string;
}

export const customSelectStyle = (styles?: Arguments) => ({
  value: (provided: CSSProperties) => ({
    ...provided
  }),

  input: (provided: CSSProperties) => ({ ...provided }),
  option: (provided: CSSProperties) => ({
    ...provided,
    cursor: "pointer",
    color: colors.black,
    fontSize: "14px",
    fontWeight: 600,
    ":hover": {
      opacity: 0.6
    },
    height: "30px",
    minHeight: "30px"
  }),
  container: (provided: CSSProperties) => ({
    ...provided,
    minWidth: "200px",
    maxWidth: "220px",
    margin: styles && styles.margin
  }),
  control: () => ({
    border: `1px solid ${colors.orange}`,
    borderRadius: "4px",
    backgroundColor: colors.blue,
    cursor: "pointer",
    height: "30px",
    minHeight: "30px"
  }),
  menu: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: colors.blue
  }),
  singleValue: () => ({
    color: colors.black,
    fontSize: "14px",
    fontWeight: 600
  }),
  dropdownIndicator: () => ({
    color: colors.black,
    margin: "0 5px"
  }),
  indicatorsContainer: (provided: CSSProperties) => ({
    ...provided,
    display: "none"
  }),
  selectContainer: (provided: CSSProperties) => ({
    ...provided,
    height: "10px"
  }),
  placeholder: () => ({
    fontSize: "14px",
    color: colors.black,
    opacity: 0.6,
    height: "10px"
  })
});
