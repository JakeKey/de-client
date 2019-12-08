import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang';
import { ThemeProvider } from 'styled-components';
import { Route } from "react-router-dom";


import { GlobalStyle } from './styles/GlobalStyle'
import {colors} from './styles/colors';
import LandingPage from "./LandingPage";
import { ProtectedRoute } from "./app/ProtectedRoute";
import Dashboard from "./app/Dashboard";


function App() {
  return (
    <ThemeProvider theme={{ background: colors.gunmetal }}>
      <Route exact path='/' component={LandingPage} />
      <Route path='/register' />
      <ProtectedRoute exact path='/app' component={Dashboard} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default reduxLang('landingpage')(connect()(App));