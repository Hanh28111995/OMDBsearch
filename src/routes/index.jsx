import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import AuthGuards from "../guards/auth.guards";
import NoAuthGuards from "../guards/no-auth.guards";
import MainLayout from "../layout/MainLayout";
import StatusEmployee from "../modules/dboard/StatusEmployee";
import DashBoard from "../pages/dboard/DashBoard";
import MissPunchDetail from "../pages/Detail/MissPunchDetail";
import Login from "../pages/Login/Login";
import InforForm from "../pages/personal infor/InforForm";
import MissPunchForm from "../pages/Ticket/MissPunch/MissPunchForm";
import TimeOffForm from "../pages/Ticket/TimeOff/TimeOffForm";

export default function Router() {
  const routing = useRoutes([
    // {
    //   path: "/",
    //   element: <SearchMovie title="Search Page" />,
    // },
    {
      path: '/',
      element: <NoAuthGuards />,
      children: [
        {
          path: "/",
          element: <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: <Login title="Login" />,
        },
      ]
    },
    {
      path: "/",
      element: <AuthGuards />,
      children: [
        {
          path: '/',
          element: <MainLayout />,
          children: [
            {
              path: "/admin",
              element: <DashBoard title="Dashboard" />,
            },
            {
              path: "/admin2",
              element: <StatusEmployee />,
            },
            {
              path: "/admin/personal_information",
              element: <InforForm deactive={false} title='Personal Information Form'/>,
            },
            {
              path: "/admin/ticket",
              children: [
                {
                  path: "/admin/ticket/miss-punch",
                  element: <MissPunchForm title="Miss Punch Form"/>,
                },
                {
                  path: "/admin/ticket/time-off",
                  element: <TimeOffForm title="Time Off Form"/>,
                },
              ]
            },
          ]
        },
        {
          path: "/admin/ticket/miss-punch/miss-punch-detail/:referenceCode",
          element: <MissPunchDetail />,
        },
      ]
    }
  ]);
  return routing;
}
