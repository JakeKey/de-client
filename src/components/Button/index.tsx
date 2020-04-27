import React, { FC } from "react";

import { ButtonColors, StyledButton, NavItem } from "./styles";

interface Props {
  navLink?: string;
  exact?: boolean;
  type?: "submit";
  color?: ButtonColors;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  navLink,
  exact,
  onClick,
  type,
  color = "primary",
  ...props
}) =>
  navLink ? (
    <NavItem to={navLink} exact={exact} color={color} {...props} />
  ) : (
    <StyledButton onClick={onClick} type={type} color={color} {...props} />
  );

export default Button;
