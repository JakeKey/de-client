import React, { FC } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import NavMenu from "components/NavMenu";
import Meals from "pages/Meals";

import DashHome from "./DashHome";
import { Wrapper } from "./styles";

const Dashboard: FC = () => (
  <Wrapper alignContent="center">
    <NavMenu />
    <Switch>
      <Route exact path="/app" component={DashHome} />
      <Route path="/app/meals" component={Meals} />
      <Redirect to="/app" />
    </Switch>
  </Wrapper>
);

export default connect()(Dashboard);
