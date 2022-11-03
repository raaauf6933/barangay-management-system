import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "./api";
import usePost from "./../../../hooks/usePost";
import { removeTokens, setToken, isAuthenticated, getToken } from "./utils";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loginUser, loginUserOpts] = usePost({
    onComplete: (e) => {
      setToken(e.data.token);
      navigate("/portal/");
    },
  });

  const login = async (formData) => {
    const { username, password } = formData;

    const result = await loginUser({
      url: USER_LOGIN,
      data: {
        email: username,
        password,
      },
    });

    return result;
  };

  const logout = () => {
    removeTokens();
    navigate("/portal/");
  };

  const getUser = () => {
    const token = getToken();

    if (!token) return null;

    const decoded_token = jwt_decode(token);

    if (decoded_token.role === "Admin") {
      return "admin";
    }

    if (decoded_token.role === "Resident") {
      return "residence";
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, getUser, AuthLoading: loginUserOpts.loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { login, logout, getUser, AuthLoading } = useContext(AuthContext);

  const hasNavPermission = (navPermission) => {
    const getuser =
      getUser() === "admin"
        ? "ADMIN"
        : getUser() === "residence"
        ? "RESIDENT"
        : null;

    return navPermission.includes(getuser);
  };

  return {
    login,
    logout,
    getUser,
    hasNavPermission,
    isAuthenticated: isAuthenticated(),
    loading: AuthLoading,
  };
};

export default AuthContext;
