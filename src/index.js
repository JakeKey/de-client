import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/index'

import App from "./App";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Normalize />
      <App />
    </Router>
  </Provider>, document.getElementById('root'));