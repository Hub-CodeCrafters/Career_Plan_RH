import React from "react";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Admin from "./pages/admin/admin.jsx";
import User from "./pages/user/user.jsx";
import Login from "./pages/Login/Login.jsx";

import "./App.css";
import { GlobalContext, GlobalProvider } from "./Contexts/global";
import { types } from "./Contexts/globalReducer";
import useGetProfiles from "./hooks/useGetProfiles";
import useGetColumns from "./hooks/useGetColumns";

import { isAuthenticated } from "./utils/generalUtils/isAuthenticated.js";
import { getUserRole } from "./utils/generalUtils/getUserRole.js";
import { getToken, isTokenExpired } from "./utils/generalUtils/tokenUtils.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";


function App() {
  
  const [state, dispatch] = useContext(GlobalContext);

  const { profiles: dataProfiles } = useGetProfiles();
  const { columns: dataColumns } = useGetColumns();

  useEffect(() => {
    if (dataProfiles) {
      dispatch({ type: types.allProfiles, payload: dataProfiles });
    }
    if (dataColumns) {
      dispatch({ type: types.allColumns, payload: dataColumns });
    }
  }, [dataProfiles, dataColumns]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<User />} />
        <Route path="/admin" element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
