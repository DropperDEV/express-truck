/* eslint-disable react/prop-types */
import  useUser  from "../features/account/useUser";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/express-truck/account/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
        <Loader />
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
