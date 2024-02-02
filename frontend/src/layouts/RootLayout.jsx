import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Index";

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
