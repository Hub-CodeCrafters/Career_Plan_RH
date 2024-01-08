import { useContext, useState } from "react";
import Rutas from "../../../../components/Rutas/Rutas";
import { GlobalContext } from "../../../../Contexts/global";
import { Link } from "react-router-dom";

import style from "./menuLateralAdmin.module.css";

import AddColumnProfile from "../addColumnProfile/addColumnProfile";
import DeleteColumnProfile from "../deleteColumnProfile/deleteColumnProfile";

const MenuLateral = ({ perfiles, columns }) => {
  const [state, dispatch] = useContext(GlobalContext);
  const { idSelected } = state;

  return (
    <div className={style.menuLateralPrincipal}>
      {idSelected == 0 && (
        <AddColumnProfile/>
      )}
      {idSelected != 0 && (
        <>
          <DeleteColumnProfile perfiles={perfiles} columns={columns} />
          <Rutas profiles={perfiles} columns={columns} />
        </>
      )}
     
    </div>
  );
};
export default MenuLateral;
