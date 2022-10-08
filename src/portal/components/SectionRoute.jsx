import React from "react";
import { Outlet } from "react-router-dom";

const SectionRoute = () => {
  //   const { permissionUserType } = props;

  return (
    <>
      <Outlet />
    </>
  );
};

export default SectionRoute;
