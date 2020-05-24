import React, { FC } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import Meals from "pages/Meals";
import NavMenu from "components/NavMenu";
import Layout from "components/Layout";

import DashHome from "./DashHome";
import { Wrapper } from "./styles";

const Dashboard: FC = () => (
  <Wrapper alignContent="center">
    <Layout>
      <NavMenu />
      <Switch>
        <Route exact path="/app" component={DashHome} />
        <Route path="/app/meals" component={Meals} />
        <Redirect to="/app" />
      </Switch>
    </Layout>
  </Wrapper>
);

export default connect()(Dashboard);
