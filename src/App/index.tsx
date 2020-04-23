import React, { Suspense, FC } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { GlobalStyle } from "styles/GlobalStyle";
import ProtectedRoute from "components/ProtectedRoute";

import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";

const App: FC = () => (
  <Suspense fallback={<div>Loading translations... </div>}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <ProtectedRoute path="/app" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
    <GlobalStyle />
  </Suspense>
);

export default App;
