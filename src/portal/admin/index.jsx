import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Announcements from "./announcements";
import AppLayout from "../components/AppLayout";
import Certificates from "./certificates";
import Reports from "./reports";
import Blotter from "./blotter";
import User from "./user";

const AdminRouter = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/announcements/*" element={<Announcements />} />
        <Route path="/certificates/*" element={<Certificates />} />
        <Route path="/reports/*" element={<Reports />} />
        <Route path="/blotter/*" element={<Blotter />} />
        <Route path="/users/*" element={<User />} />
      </Switch>
    </AppLayout>
  );
};

export default AdminRouter;
