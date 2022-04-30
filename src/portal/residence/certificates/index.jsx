import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import CertificateList from "./views/CertificateList";
import CertificateCreate from "./views/CertificateCreate";

const Certificates = () => {
  return (
    <Switch>
      <Route path="/" element={<CertificateList />} />
      <Route path="/create/*" element={<CertificateCreate />} />
      <Route path=":id" element={<h1>Details</h1>} />
    </Switch>
  );
};

export default Certificates;
