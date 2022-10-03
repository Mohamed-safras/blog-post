import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const SharedLayOut = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayOut;
