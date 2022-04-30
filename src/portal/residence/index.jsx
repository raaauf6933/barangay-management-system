import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Certificates from "./certificates";
import Reports from "./reports";
import Blotter from "./blotter";
import AppLayout from "../components/AppLayout";

const ResidenceRouter = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/certificates/*" element={<Certificates />} />
        <Route path="/reports/*" element={<Reports />} />
        <Route path="/blotter/*" element={<Blotter />} />
        <Route path="*" element={<Navigate from="*" to="/portal" />} />
      </Switch>
    </AppLayout>
  );
};

export default ResidenceRouter;
