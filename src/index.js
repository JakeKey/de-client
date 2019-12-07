import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LandingPage } from "./LandingPage";
import { ProtectedRoute } from "./app/ProtectedRoute";
import { Dashboard } from "./app/Dashboard";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarabun|Telex&display=swap');

  * {
    font-family: ${props => props.theme.fontFamily};
  }
`

function App() {
  return (
    <Router>
      <ThemeProvider theme={{ fontFamily: 'Telex' }}>
        <Normalize />
        <Route exact path='/' component={LandingPage} />
        <ProtectedRoute exact path='/app' component={Dashboard} />
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));