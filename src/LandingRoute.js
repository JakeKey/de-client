import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const LandingRoute = ({ component: Component, userdata, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!userdata || !userdata.token) {
        return <Component {...props} />
      } else {
        return <Redirect to={'/app'} />
      }
    }
    }
  />
);

const mapStateToProps = ({ user }) => {
  const { userdata } = user;
  return { userdata };
};

export default connect(mapStateToProps, {})(LandingRoute);