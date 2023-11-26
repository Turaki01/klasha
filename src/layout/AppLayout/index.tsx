import React, { Suspense } from "react";
import AuthenticatedRoutes from "routes/AuthenticatedRoutes";

const AppLayout = () => {
  return (
    <Suspense fallback={null}>
      <AuthenticatedRoutes />
    </Suspense>
  );
};

export default AppLayout;
