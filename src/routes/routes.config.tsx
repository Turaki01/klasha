import { componentLoader, lazyWithRetry } from "../utils/import-utils";
import { Routes } from "./routes-constants";

// component imports

const Dashboard = lazyWithRetry(() =>
  componentLoader(() => import("pages/dashboard/index"))
);

const Transactions = lazyWithRetry(() =>
  componentLoader(() => import("pages/transactions/index"))
);
// component imports

type ReactFunctionalComponent = () => JSX.Element | null;

export interface RoutesInterface {
  path: string;
  exact: boolean;
  isOtherModule?: boolean;
  isPrivate: boolean;
  isOpenInvoice?: boolean;
  component:
    | React.LazyExoticComponent<ReactFunctionalComponent>
    | ReactFunctionalComponent;
}

const AppRoutes: RoutesInterface[] = [
  // Dashboard
  {
    path: Routes.Dashboard,
    exact: true,
    isPrivate: true,
    component: Dashboard
  },
  {
    path: Routes.Transactions,
    exact: true,
    isPrivate: true,
    component: Transactions
  }
  // Dashboard
];

export default AppRoutes;
