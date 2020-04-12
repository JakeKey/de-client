import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import { userLogout } from "store/actions";
import usePrefix from "utils/usePrefix";

import Button from "components/Button";

import { Wrapper } from "./styles";

const connector = connect(null, { userLogout });

type PropsFromRedux = ConnectedProps<typeof connector>;

const NavMenu: FC<PropsFromRedux> = ({ userLogout }) => {
  const t = usePrefix("dashboard");
  return (
    <Wrapper flexDirection="column">
      <Button onClick={() => null}>{t("nav_products")}</Button>
      <Button onClick={() => null}>{t("nav_meals")}</Button>
      <Button onClick={() => null}>{t("nav_diets")}</Button>
      <Button onClick={userLogout}>{t("log_out")}</Button>
    </Wrapper>
  );
};

export default connector(NavMenu);
