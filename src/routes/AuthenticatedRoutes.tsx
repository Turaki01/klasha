import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "./routes-constants";
import AppRoutes from "./routes.config";

const AuthenticatedRoutes = () => {
  const AuthenticatedRoutes = AppRoutes.filter((route) => route.isPrivate);

  return (
    <div>
      <Switch>
        {AuthenticatedRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}

        <Redirect to={Routes.Dashboard} />
      </Switch>
    </div>
  );
};

export default AuthenticatedRoutes;
