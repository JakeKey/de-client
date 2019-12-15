import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang';
import { ThemeProvider } from 'styled-components';
import { Switch, Redirect } from "react-router-dom";

import { colors } from './styles/colors';
import { GlobalStyle } from './styles/GlobalStyle';

import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "./app/Dashboard";
import LandingRoute from "./LandingRoute";
import ProtectedRoute from "./app/ProtectedRoute";


function App() {
  return (
    <ThemeProvider theme={{ background: colors.gunmetal }}>
      <Switch>
        <LandingRoute exact path='/' component={LandingPage} />
        <LandingRoute path='/register' component={RegisterPage} />
        <ProtectedRoute path='/app' component={Dashboard} />
        <Redirect to='/' />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default reduxLang('landingpage')(connect()(App));