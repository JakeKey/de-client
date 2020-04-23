import React, { FC } from "react";
import { StyledButtonLink, StyledButton, NavItem } from "./styles";

interface Props {
  link?: string;
  navLink?: string;
  exact?: boolean;
  type?: "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({ link, navLink, exact, onClick, type, ...props }) =>
  link ? (
    <StyledButtonLink to={link} {...props} />
  ) : navLink ? (
    <NavItem to={navLink} exact={exact} {...props} />
  ) : (
    <StyledButton onClick={onClick} type={type} {...props} />
  );

export default Button;
