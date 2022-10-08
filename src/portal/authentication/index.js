import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import LoginView from "./views/login";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route path="login" element={<LoginView />} />
        <Route path="*" element={<Navigate to={"login"} />} />
      </Switch>
    </>
  );
};

export default AuthRouter;
