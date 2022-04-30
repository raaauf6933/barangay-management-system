import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import SelectCertificate from "./view/SelectCertificate";
import FormCertificate from "./view/FormCertificate";

const CertificateCreate = () => {
  return (
    <Switch>
      <Route path="/choose_certificate" element={<SelectCertificate />} />
      <Route path="/form" element={<FormCertificate />} />
      <Route path="*" element={<Navigate from="*" to="/portal" />} />
    </Switch>
  );
};

export default CertificateCreate;
