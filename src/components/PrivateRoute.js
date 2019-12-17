import React, { useCallback } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedUser } = useAuth();

  const render = useCallback(
    props => (loggedUser ? <Component {...props} /> : <Redirect to="/" />),
    [loggedUser]
  );

  return <Route {...rest} render={render} />;
};
