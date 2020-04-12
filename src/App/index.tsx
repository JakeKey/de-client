import React, { Suspense, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";

import { GlobalStyle } from "styles/GlobalStyle";
import ProtectedRoute from "components/ProtectedRoute";

import LandingPage from "pages/Login";
import RegisterPage from "pages/Register";
import Dashboard from "pages/Dashboard";

import { RootState } from "store/reducers";

const mapStateToProps = ({ user }: RootState) => {
  const { userdata } = user;
  return { userdata };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const App: FC<PropsFromRedux> = ({ userdata }) => (
  <Suspense fallback={<div>Loading translations... </div>}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterPage} />
      <ProtectedRoute path="/app" Component={Dashboard} userdata={userdata} />
      <Redirect to="/" />
    </Switch>
    <GlobalStyle />
  </Suspense>
);

export default connector(App);
