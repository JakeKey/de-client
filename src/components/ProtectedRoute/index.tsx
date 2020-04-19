import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "store/reducers";

const mapStateToProps = ({ user }: RootState) => {
  const { userdata } = user;
  return { userdata };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProtectedRoute: FC<RouteProps & PropsFromRedux> = ({
  userdata,
  ...rest
}) =>
  !!userdata && !!userdata.token ? <Route {...rest} /> : <Redirect to={"/"} />;

export default connector(ProtectedRoute);
