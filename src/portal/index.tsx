import AuthRouter from "./authentication";
import AdminRouter from "./admin";
import ResidenceRouter from "./residence";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth/context";
import { Routes as Switch } from "react-router-dom";

import { AuthContextProvider } from "./context/auth/context";

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
        <Switch>
          {getUser() === "residence" ? (
            <Route path="/residence/*" element={<ResidenceRouter />} />
          ) : getUser() === "admin" ? (
            <Route path="/admin/*" element={<AdminRouter />} />
          ) : null}
          <Route path="*" element={<Navigate to={getUserRoute() || ""} />} />
        </Switch>
      ) : (
        <AuthRouter />
      )}
    </>
  );
};

export default Portal;
