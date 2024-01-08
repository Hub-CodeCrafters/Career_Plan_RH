import React from "react";
import { Link } from "react-router-dom";
import style from "./navigationAdmin.module.css";
import { Navigate } from "react-router-dom";
import { getToken,removeToken } from "../../../../utils/generalUtils/tokenUtils";

const NavegationAdmin = () => {

 const handleCloseSesion = () => {
    removeToken();
    getToken();
    if(!getToken()){
      return <Navigate to="/" replace={true} />;
    }
 }

  return (
    <section className={style.navigation}>
      <div className={style.navigate}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button onClick={handleCloseSesion} className={`${style.navigateButton} ${style.botonrojo}`}>Cerrar Sesión</button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button  className={style.navigateButton}>Vista de Usuario</button>
        </Link>
      </div>
      <div className={style.panel}>
        <span>Panel Administrador</span>
      </div>
    </section>
  );
};

export default NavegationAdmin;
