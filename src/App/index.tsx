import React, { Suspense, FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { Normalize } from "styled-normalize";
import { PersistGate } from "redux-persist/integration/react";
import { connect, ConnectedProps } from "react-redux";

import "i18n";
import { persistor } from "store/index";
import { GlobalStyle } from "styles/GlobalStyle";
import { RootState } from "store/reducers";

import ProtectedRoute from "components/ProtectedRoute";

import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";
import Notifications from "components/Notifications";

const mapStateToProps = ({ user }: RootState) => {
  const { notifications } = user;
  return { notifications };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const App: FC<PropsFromRedux> = ({ notifications }) => (
  <PersistGate loading={null} persistor={persistor}>
    <Normalize />
    <Router>
      <Suspense fallback={<div>Loading translations... </div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/app" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
        {!!notifications?.length && (
          <Notifications notifications={notifications} />
        )}
        <GlobalStyle />
      </Suspense>
    </Router>
  </PersistGate>
);

export default connector(App);
