import React, { ComponentType, FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "store/reducers";

const mapStateToProps = ({ user }: RootState) => {
  const { userdata } = user;
  return { userdata };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  Component: ComponentType;
}

const ProtectedRoute: FC<Props & RouteProps & PropsFromRedux> = ({
  Component,
  userdata,
  ...rest
}) =>
  !!userdata && !!userdata.token ? (
    <Route {...rest}>
      <Component />
    </Route>
  ) : (
    <Redirect to={"/"} />
  );

export default connector(ProtectedRoute);
