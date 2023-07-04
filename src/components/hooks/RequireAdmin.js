import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading";
import useAdmin from "./useAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
