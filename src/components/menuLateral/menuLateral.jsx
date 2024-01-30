import { useContext, useState } from "react";
import { GlobalContext } from "../../Contexts/global";
import { types } from "../../Contexts/globalReducer";
import style from "./menuLateral.module.css";

// componentes globales
import MenuRutas from "../MenuRutas/MenuRutas";
import { StudyManagement } from "../StudyManagement/StudyManagement";
import SelectedProfileName from "../SelectedProfileName/SelectedProfileName"

// componetes admin
import AddColumnProfile from "../../pages/admin/adminComponents/addColumnProfile/addColumnProfile";

import AssociateRoutes from "../../pages/admin/adminComponents/AssociateRoutes/AssociateRoutes";
// componentens user
import{AdminLoginRedirectButton} from "../../pages/user/userComponents/AdminLoginRedirectButton/AdminLoginRedirectButton"

const MenuLateral = ({ perfiles, columns }) => {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect, buttomActual, paginaActual } = state;

  const handleClick = (componentName) => {
    dispatch({ type: types.buttomActual, payload: componentName });
  };

  const handleBack = () => {
    dispatch({ type: types.buttomActual, payload: null });
  };

  return (
    <div className={style.menuLateralPrincipal}>
      {paginaActual === "user" &&<AdminLoginRedirectButton/>} 
      {profileSelect === null && paginaActual === "admin" && (<AddColumnProfile />)}
      {profileSelect !== null && (
        <>
          <SelectedProfileName />
          <MenuRutas />
          {buttomActual === null && (
            <div className={style.informationProfile}>
              {paginaActual === "admin" && 
               <button
               className={style.informationButtom}
               onClick={() => handleClick("Rutas")}
             >
               Rutas del perfil
             </button>
              }
              <button
                className={style.informationButtom}
                onClick={() => handleClick("Estudios")}
              >
                Estudios
              </button>
              <button
                className={style.informationButtom}
                onClick={() => handleClick("Experiencias")}
              >
                Experiencias
              </button>
              <button
                className={style.informationButtom}
                onClick={() => handleClick("Habilidades")}
              >
                Habilidades
              </button>
              <button
                className={style.informationButtom}
                onClick={() => handleClick("Competencias")}
              >
                Competencias
              </button>
            </div>
          )}
          {buttomActual === "Rutas" && paginaActual === "admin" && (
            <AssociateRoutes />
          )}
          {buttomActual === "Estudios" && <StudyManagement />}
        </>
      )}

      {buttomActual !== null && profileSelect && (
        <div className={style.informationBack}>
          <button onClick={handleBack} className={style.informationButtomBack}>
            <img src="src\assets\icons\volver.png" alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuLateral;
