import React, { FC } from "react";

import { ButtonColors, StyledButton, NavItem } from "./styles";

interface Props {
  navLink?: string;
  exact?: boolean;
  type?: "submit";
  color?: ButtonColors;
  margin?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  navLink,
  exact,
  onClick,
  type,
  color = "primary",
  margin = "16px 0",
  disabled = false,
  ...props
}) =>
  navLink ? (
    <NavItem
      to={navLink}
      exact={exact}
      color={color}
      margin={margin}
      disabled={disabled}
      {...props}
    />
  ) : (
    <StyledButton
      onClick={onClick}
      type={type}
      color={color}
      margin={margin}
      disabled={disabled}
      {...props}
    />
  );

export default Button;
