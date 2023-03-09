import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import StatusEmployee from "../modules/dboard/StatusEmployee";
import DashBoard from "../pages/dboard/DashBoard";
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
      path: "/login",
      element: <Login title="WCL Login" />,
    },
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/admin1",
          element: <DashBoard title="WCL Dashboard" />,
        },
        {
          path: "/admin2",
          element: <StatusEmployee/>,
        },
        {
          path: "/admin/Personal_Information",
          element: <InforForm deactive={false}/>,
        },
        {
          path: "/admin/ticket",
          children:[
            {
              path:"/admin/ticket/miss-punch",
              element:<MissPunchForm/>,
            },
            {
              path:"/admin/ticket/time-off",
              element:<TimeOffForm/>,
            },
          ]
        },
      ]
    },
  ]);
  return routing;
}
