import React from "react";
import { useRoutes } from "react-router-dom";
import SearchMovie from "../SearchMoviePJ/SearchMovie";
import DashBoard from "../StaffManagement/Pages/DashBoard";
import Login from "../StaffManagement/Pages/Login/Login";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <SearchMovie title="Search Page"/>,
    },
    {
      path: "/login",
      element: <Login title="WCL Login "/>,
    },
    {
      path: "/dashboard",
      element: <DashBoard title="WCL Dashboard "/>,
    },
  ]);
  return routing;
}
