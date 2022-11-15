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
import IssuanceCreate from "./residence/issuance/views/IssuanceCreate";

import Dashboard from "./admin/dashboard";
import AnnouncementList from "./admin/announcements/views/AnnouncementList";
import AnnouncementCreate from "./admin/announcements/views/AnnouncementCreate";
import AnnouncementEdit from "./admin/announcements/views/AnnouncementEdit";
import IssuanceManagementList from "./admin/issuance_management/views/IssuanceManagementList";
import IssuanceManagementCreate from "./admin/issuance_management/views/IssuanceManagementCreate";
import IssuanceManagementDetails from "./admin/issuance_management/views/IssuanceManagementDetails";
import PositionsList from "./admin/positions/views/PositionsList";
import OfficialsList from "./admin/officials/views/OfficialsList";
import ResidentsList from "./admin/residents/views/ResidentsList/inidex";
import ResidentsCreate from "./admin/residents/views/ResidentsCreate";
import ResidentDetails from "./admin/residents/views/ResidentDetails";

import UsersList from "./admin/users/views/UsersList";
import MyProfile from "./myProfile";
import BlotterList from "./admin/blotter/views/BlotterList";
import BlotterReportCreate from "./admin/blotter/views/BlotterReportCreate";
import BlotterReportView from "./admin/blotter/views/BlotterReportView";
import BlotterReportEdit from "./admin/blotter/views/BlotterReportEdit";
import IssuanceView from "./residence/issuance/views/IssuanceView";
import ContentSettings from "./admin/content_settings";
import IncidentReportList from "./admin/incident_report/views/IncidentReportList";
import IncidentReportView from "./admin/incident_report/views/IncidentReportView";

import ResidentIncidentReportList from "./residence/incident_report/views/ResidentIncidentReportList";
import ResidentIncidentReport from "./residence/incident_report/views/ResidentIncidentReportView";
import ResidentIncidentReportCreate from "./residence/incident_report/views/ResidentIncidentReportCreate";
import BarangayReports from "./admin/barangay_reports";

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
      case "Super_Admin":
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
                    <Route path="create" element={<IssuanceCreate />}></Route>
                    <Route path=":id" element={<IssuanceView />} />
                  </Route>
                  <Route path="incident_report">
                    <Route index element={<ResidentIncidentReportList />} />
                    <Route path=":id" element={<ResidentIncidentReport />} />
                    <Route
                      path="create"
                      element={<ResidentIncidentReportCreate />}
                    />

                    {/* <Route path="edit/:id" element={<BlotterReportEdit />} /> */}
                  </Route>
                </Route>
              </>
            ) : getUser() === "admin" || getUser() === "Super_Admin" ? (
              <Route path="admin" element={<SectionRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="announcements" element={<SectionRoute />}>
                  <Route index element={<AnnouncementList />} />
                  <Route path="create" element={<AnnouncementCreate />} />
                  <Route path=":id" element={<AnnouncementEdit />} />
                </Route>
                <Route path="issuance_management">
                  <Route index element={<IssuanceManagementList />} />
                  <Route path="create" element={<IssuanceManagementCreate />} />
                  <Route path=":id" element={<IssuanceManagementDetails />} />
                </Route>
                <Route path="reports">
                  <Route index element={<h1>Reports Landing Page</h1>} />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="blotter">
                  <Route index element={<BlotterList />} />
                  <Route path="create" element={<BlotterReportCreate />} />
                  <Route path=":id" element={<BlotterReportView />} />
                  <Route path="edit/:id" element={<BlotterReportEdit />} />
                </Route>
                <Route path="incident_report">
                  <Route index element={<IncidentReportList />} />
                  <Route path=":id" element={<IncidentReportView />} />
                  <Route path="edit/:id" element={<BlotterReportEdit />} />
                </Route>
                <Route path="officials_management">
                  <Route path="positions">
                    <Route index element={<PositionsList />} />
                    <Route path="create" element={<h1>Test details</h1>} />
                  </Route>
                  <Route path="officials">
                    <Route index element={<OfficialsList />} />
                    <Route path="create" element={<h1>Test details</h1>} />
                  </Route>
                </Route>
                <Route path="resident_management">
                  <Route index element={<ResidentsList />} />
                  <Route path="create" element={<ResidentsCreate />} />
                  <Route path=":id" element={<ResidentDetails />} />
                </Route>
                <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path="create" element={<h1>Test details</h1>} />
                </Route>
                <Route path="content_settings">
                  <Route index element={<ContentSettings />} />
                  {/* <Route path="create" element={<h1>Test details</h1>} /> */}
                </Route>
                <Route path="barangay_report">
                  <Route index element={<BarangayReports />} />
                </Route>
              </Route>
            ) : null}
            <Route path="my_profile" element={<MyProfile />} />
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
