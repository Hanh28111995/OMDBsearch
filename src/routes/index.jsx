import React from "react";
import { useRoutes } from "react-router-dom";
import SearchMovie from "../SearchMoviePJ/SearchMovie";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <SearchMovie title="Search Page"/>,
    },
  ]);
  return routing;
}
