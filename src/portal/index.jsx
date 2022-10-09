import React from "react";
import AuthRouter from "./authentication";
import { AuthContextProvider } from "./context/auth/context";
import { Route, Navigate } from "react-router-dom";
import SectionRoute from "./components/SectionRoute";
import { useAuth } from "./context/auth/context";
import { Routes as Switch } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ClientAppLayout from "./../home/components/AppLayout";

import Home from "./residence/home";
import IssuanceList from "./residence/issuance/views/IssuanceList";
import SelectCertificate from "./residence/issuance/views/IssuanceCreate/view/SelectCertificate";
import FormCertificate from "./residence/issuance/views/IssuanceCreate/view/FormCertificate";

import Dashboard from "./admin/dashboard";
import AnnouncementList from "./admin/announcements/views/AnnouncementList";
import AnnouncementCreate from "./admin/announcements/views/AnnouncementCreate";

const Portal = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </>
  );
};

const Routes = () => {
  const { isAuthenticated, getUser } = useAuth();

  const getUserRoute = () => {
    const type = getUser();

    switch (type) {
      case "admin":
        return "/portal/admin";
      case "residence":
        return "/portal/residence";

      default:
        break;
    }
  };
  console.log(getUser());
  return (
    <>
      {isAuthenticated ? (
        <AppLayout>
          <Switch>
            {getUser() === "residence" ? (
              <>
                <Route path="residence" element={<SectionRoute />}>
                  <Route index element={<Home />} />
                  <Route path="issuance">
                    <Route index element={<IssuanceList />} />
                    <Route path="create">
                      <Route
                        path="choose_certificate"
                        element={<SelectCertificate />}
                      />
                      <Route path="form" element={<FormCertificate />} />
                    </Route>
                    <Route path=":id" element={<h1>Details</h1>} />
                  </Route>
                </Route>
              </>
            ) : getUser() === "admin" ? (
              <Route path="admin" element={<SectionRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="announcements" element={<SectionRoute />}>
                  <Route index element={<AnnouncementList />} />
                  <Route path="create" element={<AnnouncementCreate />} />
                </Route>
                <Route path="request">
                  <Route index element={<h1>Certificates Landing Page</h1>} />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="reports">
                  <Route index element={<h1>Reports Landing Page</h1>} />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="blotter">
                  <Route index element={<h1>Blotter Landing Page</h1>} />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="officials_management">
                  <Route
                    index
                    element={<h1>officials_management Landing Page</h1>}
                  />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="resident_management">
                  <Route
                    index
                    element={<h1>resident_management Landing Page</h1>}
                  />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="users">
                  <Route index element={<h1>User Landing Page</h1>} />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
              </Route>
            ) : null}
            <Route path="my_profile" element={<h1>test</h1>} />
            <Route path="*" element={<Navigate to={getUserRoute()} />} />
          </Switch>
        </AppLayout>
      ) : (
        <ClientAppLayout>
          <AuthRouter />
        </ClientAppLayout>
      )}
    </>
  );
};

export default Portal;
