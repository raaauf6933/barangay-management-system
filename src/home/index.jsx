import React from "react";
import AppLayout from "./components/AppLayout";
import "./style.css";
import HomeView from "./views/Home";
import { Routes as Switch, Route } from "react-router-dom";
import SectionRoute from "../portal/components/SectionRoute";
import BarangayOfficials from "./views/BarangayOfficials";
import ContactUs from "./views/ContactUs";
import Announcement from "./views/Announcement";

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
      <Route path="/" element={<SectionRoute />}>
        <Route index element={<HomeView />} />
        <Route path="announcement">
          <Route path=":id" element={<Announcement />} />
        </Route>
        <Route path="barangay_officials" element={<BarangayOfficials />} />
        <Route path="contact_us" element={<ContactUs />} />
      </Route>
    </Switch>
  );
};

export default Home;
