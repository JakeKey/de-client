import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";

import App from "./App";

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Normalize />
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);