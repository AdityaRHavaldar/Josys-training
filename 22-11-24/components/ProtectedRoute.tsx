import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  returnUrl: string;
  roles: string[];
  children: React.ReactNode;
}

const ProtectedRoute = ({
  returnUrl,
  roles,
  children,
}: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = sessionStorage.getItem("AUTH_TOKEN");
    const userRole = sessionStorage.getItem("USER_ROLE");

    if (!userToken) {
      alert("Please Login!!!...");
      return navigate(`/Login?returnUrl=${returnUrl}`);
    }

    if (roles && !roles.includes(userRole || "")) {
      alert("You do not have permission to access this page.");
      return navigate("/");
    }
  }, [returnUrl, roles, navigate]);

  return <>{sessionStorage.getItem("AUTH_TOKEN") ? children : null}</>;
};

export default ProtectedRoute;
