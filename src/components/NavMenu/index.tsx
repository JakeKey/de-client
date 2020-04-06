import React from "react";
import { connect } from "react-redux";
import { Button } from "../inputs";
import { NavMenuWrapper } from "../containers";
import { userLogout } from "store/actions";

const NavMenu = ({ t, userLogout }: any) => (
  <NavMenuWrapper>
    <Button primary={true} onClick={() => null}>
      {t("home_nav_products")}
    </Button>
    <Button primary={true} onClick={() => null}>
      {t("home_nav_meals")}
    </Button>
    <Button primary={true} onClick={() => null}>
      {t("home_nav_diets")}
    </Button>

    <Button primary={true} onClick={userLogout}>
      {t("home_log_out")}
    </Button>
  </NavMenuWrapper>
);

const mapStateToProps = () => null;
//const { token } = user;
// return {}

export default connect(mapStateToProps, { userLogout })(NavMenu);
