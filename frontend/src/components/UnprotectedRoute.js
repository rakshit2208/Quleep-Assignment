// src/components/UnprotectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function UnprotectedRoute({ component: Component, redirectTo }) {
    const { isAuthenticated } = useContext(AuthContext);
    return !isAuthenticated ? <Component /> : <Navigate to={redirectTo} />;
}

export default UnprotectedRoute;
