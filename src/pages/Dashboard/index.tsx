import React, { FC } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import NavMenu from "components/NavMenu";
import Meals from "pages/Meals";

import DashHome from "./DashHome";
import { Wrapper } from "./styles";

const Dashboard: FC = () => (
  <Wrapper alignContent="center">
    <NavMenu />
    <Route exact path="/app" component={DashHome} />
    <Route path="/app/meals" component={Meals} />
  </Wrapper>
);

export default connect()(Dashboard);
