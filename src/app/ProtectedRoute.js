import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props => <Component {...props} /> } 
  />
);

