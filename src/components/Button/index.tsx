import React, { FC } from "react";
import { StyledButtonLink, StyledButton } from "./styles";

interface Props {
  link?: string;
  type?: "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ link, onClick, type, ...props }) =>
  link ? (
    <StyledButtonLink to={link} {...props} />
  ) : (
    <StyledButton onClick={onClick} type={type} {...props} />
  );

export default Button;
