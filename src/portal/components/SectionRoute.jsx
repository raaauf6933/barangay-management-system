import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";

const SectionRoute = () => {
  //   const { permissionUserType } = props;

  return (
    <>
      <Outlet />
    </>
  );
};

export default SectionRoute;
