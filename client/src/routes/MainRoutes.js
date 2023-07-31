import React, { lazy } from "react";
import Loadable from "../Components/PageLoading/Loadable";
import MainLayout from "../Layouts/MainLayout/MainLayout";

import AdminLayout from "../Layouts/AdminLayout/AdminLayout";

// render -

const AdminDashboard = Loadable(
  lazy(() => import("../Pages/AdminDashboard/AdminHomePage/AdminDashboard"))
);

const CompanyPage = Loadable(
  lazy(() => import("../Pages/AdminDashboard/CompanyPage/CompanyPage"))
);

// ==============================|| USER PAGES ||============================== //
//HomePage

//ContestDetailsPage

//CompanyPage
const CompanyLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/CompanyPage/CompanyLayout"))
);

// ==============================|| MAIN USER ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/company",
      element: <CompanyLayout />,
    },
  ],
};

export default MainRoutes;
