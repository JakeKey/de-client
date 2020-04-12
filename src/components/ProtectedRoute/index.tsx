import React, { ComponentType } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { UserDataType } from "store/types";

interface Props {
  Component: ComponentType;
  userdata: UserDataType | null;
}

const ProtectedRoute: React.FC<Props & RouteProps> = ({
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

export default ProtectedRoute;
