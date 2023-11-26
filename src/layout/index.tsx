import React from "react";
import { componentLoader, lazyWithRetry } from "utils/import-utils";

const AuthenticatedApp = lazyWithRetry(() =>
  componentLoader(() => import("layout/AppLayout"))
);


const RouteLayout = () => {
  return <AuthenticatedApp />;
};

export default RouteLayout;
