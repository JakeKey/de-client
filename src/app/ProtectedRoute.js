import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, userdata, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!!userdata && !!userdata.token) {
        return <Component {...props} />
      } else {
        return <Redirect to={'/'} />
      }
    }
    }
  />
);

const mapStateToProps = ({ user }) => {
  const { userdata } = user;
  return { userdata };
};

export default connect(mapStateToProps, {})(ProtectedRoute);