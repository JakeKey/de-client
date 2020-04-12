import React, { Suspense, FC } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { GlobalStyle } from "styles/GlobalStyle";
import ProtectedRoute from "components/ProtectedRoute";

import LandingPage from "pages/Login";
import RegisterPage from "pages/Register";
import Dashboard from "pages/Dashboard";

const App: FC = () => (
  <Suspense fallback={<div>Loading translations... </div>}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterPage} />
      <ProtectedRoute path="/app" Component={Dashboard} />
      <Redirect to="/" />
    </Switch>
    <GlobalStyle />
  </Suspense>
);

export default App;
