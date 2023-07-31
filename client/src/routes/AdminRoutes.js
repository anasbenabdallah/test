import { lazy } from "react";

// project import
import Loadable from "../Components/PageLoading/Loadable";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";

// render -

const AdminDashboard = Loadable(
  lazy(() => import("../Pages/AdminDashboard/AdminHomePage/AdminDashboard"))
);

const CompanyPage = Loadable(
  lazy(() => import("../Pages/AdminDashboard/CompanyPage/CompanyPage"))
);
const LogsPage = Loadable(
  lazy(() => import("../Pages/AdminDashboard/logspage/logs"))
);
// ==============================|| AUTH ROUTING ||============================== //

const AdminRoutes = {
  path: "/",
  element: <AdminLayout />,
  children: [
    {
      path: "adminDashboard",
      element: <AdminDashboard />,
    },
    {
      path: "companies",
      element: <CompanyPage />,
    },
    {
      path: "logs",
      element: <LogsPage/>,
    },
  ],
};

export default AdminRoutes;
