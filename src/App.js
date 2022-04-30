import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./home";
import Portal from "./portal";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/*" element={<Home />} />
      <Route path="/portal/*" element={<Portal />} />
    </Switch>
  );
};

export default App;
