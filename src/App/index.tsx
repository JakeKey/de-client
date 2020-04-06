import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";

import { GlobalStyle } from "styles/GlobalStyle";
import LandingRoute from "utils/LandingRoute";
import ProtectedRoute from "utils/ProtectedRoute";

import LandingPage from "pages/Login";
import RegisterPage from "pages/Register";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <Suspense fallback={<div>Loading translations... </div>}>
      <Switch>
        <LandingRoute exact path="/" component={LandingPage} />
        <LandingRoute path="/register" component={RegisterPage} />
        <ProtectedRoute path="/app" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
}

export default connect()(App);
