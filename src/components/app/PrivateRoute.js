import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

// PrivateRoute - Checks user authentication and loads login page if user
//                is not authenticated and loads dashboard if user is
//                authenticated
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
