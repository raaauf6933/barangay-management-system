import React from "react";
import AppLayout from "./components/AppLayout";
import "./style.css";
import HomeView from "./views/Home";
import { Routes as Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <AppLayout>
      <Routes />
    </AppLayout>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<HomeView />} />
    </Switch>
  );
};

export default Home;
