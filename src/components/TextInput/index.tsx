import React, { FC, InputHTMLAttributes } from "react";

import { Wrapper, Label, StyledInput } from "./styles";

interface Props {
  label?: string;
}

const TextInput: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  ...props
}) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledInput {...props} />
  </Wrapper>
);

export default TextInput;
