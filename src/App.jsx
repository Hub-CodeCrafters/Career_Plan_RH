
import React, { useContext, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// 

// componetes glocales
import Admin from "./pages/admin/admin.jsx";
import User from "./pages/user/user.jsx";
import Login from "./pages/Login/Login.jsx";
import { GlobalContext} from "./Contexts/global";
import { types } from "./Contexts/globalReducer";
import useGetProfiles from "./hooks/useGetProfiles";
import useGetColumns from "./hooks/useGetColumns";
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
    <Router>
      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route  path="/" element={<User />} />
        <Route 
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

