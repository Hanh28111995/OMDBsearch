import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashBoard from "../pages/dboard/DashBoard";
import Login from "../pages/Login/Login";
import SearchMovie from "../SearchMoviePJ/SearchMovie";

export default function Router() {
  const routing = useRoutes([
    // {
    //   path: "/",
    //   element: <SearchMovie title="Search Page" />,
    // },
    {
      path: "/login",
      element: <Login title="WCL Login" />,
    },
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/admin",
          element: <DashBoard title="WCL Dashboard" />,
        }]
    },
  ]);
  return routing;
}
