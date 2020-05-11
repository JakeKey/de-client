import styled, { CSSProperties } from "styled-components/macro";
import colors from "styles/colors";

export const customSelectStyle = {
  option: (provided: CSSProperties) => ({
    ...provided,
    cursor: "pointer",
    color: colors.dark_gray,
    fontSize: "13px",
    fontWeight: 600,
    ":hover": {
      backgroundColor: colors.dark_blue
    }
  }),
  container: (provided: CSSProperties) => ({
    ...provided,
    width: "250px"
  }),
  control: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: colors.blue,
    cursor: "pointer"
  }),
  menu: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: colors.blue
  }),
  singleValue: (provided: CSSProperties) => ({
    ...provided,
    color: colors.dark_gray,
    fontSize: "13px",
    fontWeight: 600
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ color: colors.dark_gray })
};

export const Wrapper = styled.div`
  width: 300px;
`;
