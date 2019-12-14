import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from "react-router-dom";

import styled from 'styled-components';
import { colors } from './styles/colors';
import { GlobalStyle } from './styles/GlobalStyle';

import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "./app/Dashboard";
import { ProtectedRoute } from "./app/ProtectedRoute";


function App() {
  return (
    <ThemeProvider theme={{ background: colors.gunmetal }}>
      <Switch>
        <LandingPageWrapper >
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={RegisterPage} />
          <Redirect to='/' />
        </LandingPageWrapper>

      </Switch>
      <ProtectedRoute exact path='/app' component={Dashboard} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

const LandingPageWrapper = styled.div`
  background: ${props => props.primary ? colors.gunmetal : colors.shamrock};
  display: flex;

  flex-direction: column; 
  align-content: center;
  margin: 10vh 30vw;
  padding: 5vh 5vw;
  border: 2px solid palevioletred;
  border-radius: 20px;
`;

export default reduxLang('landingpage')(connect()(App));