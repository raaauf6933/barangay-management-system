import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import BlotterList from "./views/BlotterList";

const Blotter = () => {
  return (
    <Switch>
      <Route path="/" element={<BlotterList />} />
      <Route path="/create/*" element={<h1>create</h1>} />
      <Route path=":id" element={<h1>Details</h1>} />
    </Switch>
  );
};

export default Blotter;
