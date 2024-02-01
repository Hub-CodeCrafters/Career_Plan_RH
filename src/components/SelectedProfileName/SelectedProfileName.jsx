import { useContext, useState } from "react";
import { GlobalContext } from "../../Contexts/global";
import { types } from "../../Contexts/globalReducer";

import style from "./SelectedProfileName.module.css";
// componentes admin
import DeleteColumnProfile from "../../pages/admin/adminComponents/deleteColumnProfile/deleteColumnProfile";
const SelectedProfileName = () => {

  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect, profiles, paginaActual } = state;

  return (
    <div>
      <h3 className={style.selectProfile}>Perfil Seleccionado</h3>
      <h3 className={style.nameProfile}>{profileSelect.name}</h3>
      {paginaActual === "admin" && (
       <DeleteColumnProfile />
      )}
    </div>
  );
};
export default SelectedProfileName;