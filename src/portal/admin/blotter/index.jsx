import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

const Blotter = () => {
  return (
    <Switch>
      <Route path="/" element={<h1>Blotter Landing Page</h1>} />
      <Route path="/create/*" element={<h1>Test details</h1>} />
    </Switch>
  );
};

export default Blotter;
