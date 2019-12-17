import React, { useCallback } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth();

  const render = useCallback(
    props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />),
    [isAuthenticated]
  );

  return <Route {...rest} render={render} />;
};
