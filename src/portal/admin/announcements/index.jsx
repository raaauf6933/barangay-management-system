import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import AnnouncementCreate from "./views/AnnouncementCreate";
import AnnouncementList from "./views/AnnouncementList";

const Announcements = () => {
  return (
    <Switch>
      <Route path="/" element={<AnnouncementList />} />
      <Route path="/create/*" element={<AnnouncementCreate />} />
    </Switch>
  );
};

export default Announcements;
