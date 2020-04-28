import React, { Suspense, FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "i18n";
import { store, persistor } from "store/index";
import { GlobalStyle } from "styles/GlobalStyle";

import ProtectedRoute from "components/ProtectedRoute";

import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";

const App: FC = () => (
  <Provider store={store}>
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
          <GlobalStyle />
        </Suspense>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
