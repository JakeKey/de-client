import { CSSProperties } from "styled-components/macro";

import colors from "styles/colors";

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
    height: "27px"
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
  placeholder: (provided: CSSProperties) => ({
    ...provided,
    fontSize: "14px",
    color: colors.black,
    opacity: 0.6,
    height: "10px"
  })
});
