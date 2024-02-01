import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getToken, isTokenExpired } from "../../utils/generalUtils/tokenUtils";

const PrivateRoute = ({children}) => {

    const token = getToken();
    
    if (!token || isTokenExpired(token)) {
        return <Navigate to="/login" replace={true} />;
    }

     return children;
};

export default PrivateRoute;
