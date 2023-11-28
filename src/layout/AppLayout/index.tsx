import FullpageLoader from "components/FullpageLoader";
import React, { Suspense } from "react";
import AuthenticatedRoutes from "routes/AuthenticatedRoutes";

const AppLayout = () => {
  return (
    <Suspense fallback={<FullpageLoader />}>
      <AuthenticatedRoutes />
    </Suspense>
  );
};

export default AppLayout;
