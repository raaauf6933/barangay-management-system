import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { removeTokens, setToken, isAuthenticated, getToken } from "./utils";

const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = (formData) => {
    const { username } = formData;

    if (username === "admin") {
      setToken("admin");
    } else if (username === "residence") {
      setToken("residence");
    }

    if (isAuthenticated()) {
      navigate("/portal/");
    }
  };

  const logout = () => {
    removeTokens();
    navigate("/portal/");
  };

  const getUser = () => {
    if (getToken() === "admin") {
      return "admin";
    } else if (getToken() === "residence") {
      return "residence";
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { login, logout, getUser } = useContext(AuthContext);

  const hasNavPermission = (navPermission) => {
    const getuser =
      getUser() === "admin"
        ? "ADMIN"
        : getUser() === "residence"
        ? "RESIDENT"
        : null;

    return getuser === navPermission;
  };

  return {
    login,
    logout,
    getUser,
    hasNavPermission,
    isAuthenticated: isAuthenticated(),
  };
};

export default AuthContext;
