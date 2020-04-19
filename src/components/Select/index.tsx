import React from "react";
import ReactSelect from "react-select";

import { Wrapper, customSelectStyle } from "./styles";

interface OptionType {
  value: string | number;
}

interface Props {
  options: OptionType[];
  onChange: (val: any) => void;
  value: OptionType;
  isSearchable: boolean;
}

const Select: React.FC<Props> = ({
  options,
  onChange,
  value,
  isSearchable = false
}) => (
  <Wrapper>
    <ReactSelect
      onChange={onChange}
      options={options}
      value={value}
      styles={customSelectStyle}
      isSearchable={isSearchable}
    />
  </Wrapper>
);

export default Select;
