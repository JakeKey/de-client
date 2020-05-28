import React, { FC, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { userLogout } from "store/actions";
import usePrefix from "utils/usePrefix";

import {
  Wrapper,
  AppTitle,
  NavItemLink,
  NavItem,
  StyledIcon,
  BurgerMenu
} from "./styles";

const connector = connect(null, { userLogout });

type PropsFromRedux = ConnectedProps<typeof connector>;

const NavMenu: FC<PropsFromRedux> = ({ userLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = usePrefix("navigation");

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <div>
          <StyledIcon type="close" onClick={() => setIsOpen(false)} />
        </div>
        <AppTitle>{t("app_title")}</AppTitle>
        <NavItemLink onClick={() => setIsOpen(false)} exact to="/app">
          {t("nav_home")}
        </NavItemLink>
        <NavItemLink onClick={() => setIsOpen(false)} to="/app/meals">
          {t("nav_meals")}
        </NavItemLink>
        <NavItemLink onClick={() => setIsOpen(false)} to="/app/diets">
          {t("nav_diets")}
        </NavItemLink>
        <NavItem onClick={userLogout}>{t("log_out")}</NavItem>
      </Wrapper>
      <BurgerMenu>
        <StyledIcon type="menu" onClick={() => setIsOpen(true)} />
      </BurgerMenu>
    </>
  );
};

export default connector(NavMenu);
