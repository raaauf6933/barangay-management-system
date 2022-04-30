import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import ReportList from "./views/ReportList";

const Reports = () => {
  return (
    <Switch>
      <Route path="/" element={<ReportList />} />
      <Route path="/create/*" element={<h1>create</h1>} />
      <Route path=":id" element={<h1>Details</h1>} />
    </Switch>
  );
};

export default Reports;
