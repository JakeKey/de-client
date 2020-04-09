import React from "react";
import { connect } from "react-redux";

import { userLogout } from "store/actions";
import usePrefix from "utils/usePrefix";

import Button from "components/Button";

import { Wrapper } from "./styles";

const NavMenu = ({ userLogout }: any) => {
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
const mapStateToProps = () => null;
//const { token } = user;
// return {}

export default connect(mapStateToProps, { userLogout })(NavMenu);
