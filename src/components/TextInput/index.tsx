import React, { FC, InputHTMLAttributes } from "react";

import { Wrapper, Label, StyledInput } from "./styles";

interface Props {
  label?: string;
  margin?: string;
}

const TextInput: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  margin = "12px 0",
  ...props
}) => (
  <Wrapper margin={margin}>
    {label && <Label>{label}</Label>}
    <StyledInput {...props} />
  </Wrapper>
);

export default TextInput;
