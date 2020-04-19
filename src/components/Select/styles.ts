import styled, { CSSProperties } from "styled-components/macro";
import colors from "styles/colors";

export const customSelectStyle = {
  option: (provided: CSSProperties) => ({
    ...provided,
    cursor: "pointer",
    color: colors.gunmetal,
    fontSize: "13px",
    fontWeight: 600,
    ":hover": {
      backgroundColor: colors.darkBlue
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
    color: colors.gunmetal,
    fontSize: "13px",
    fontWeight: 600
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ color: colors.gunmetal })
};

export const Wrapper = styled.div`
  width: 300px;
`;
