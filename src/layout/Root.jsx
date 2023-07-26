import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../shared/menu/Menu";

const Root = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Root;
