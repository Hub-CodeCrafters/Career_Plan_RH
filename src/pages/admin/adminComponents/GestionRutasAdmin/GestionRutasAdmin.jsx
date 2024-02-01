import { useContext, useState } from "react";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import { getToken } from "../../../../utils/generalUtils/tokenUtils";
import style from "./GestionRutasAdmin.module.css";
import { updateAllProfiles } from "../../../../services/profileServices";

function GestionRutasAdmin() {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect, rutaActual, profiles } = state;

  const delRoute = () => {

    if (profileSelect.routes.length === 1) {
      alert("No se puede eliminar la única ruta, borre los perfiles relacionados y dejela vacia");
      return;
    }

    if (profileSelect.routes.length > 1) {
      const copyProfileSelect = { ...profileSelect };
      copyProfileSelect.routes.splice(rutaActual, 1);
      dispatch({ type: types.profileSelect, payload: copyProfileSelect });
      dispatch({ type: types.changeRutaActual, payload: 0 });
      dispatch({
        type: types.updateRutaSelect,
        payload: copyProfileSelect.routes[0]
      });
      const indexprofile = profiles.findIndex(
        (profile) => profile.id === profileSelect.id
      );
      if (indexprofile !== -1) {
        profiles[indexprofile] = copyProfileSelect;
        updateAllProfiles(profiles, getToken());
      } else {
        console.error("No se encontró el perfil en la matriz.");
      }
    }
    
  };

  const addRoute = () => {
    const copyProfileSelect = { ...profileSelect };
    copyProfileSelect.routes.push([]);
    dispatch({ type: types.profileSelect, payload: copyProfileSelect });
    dispatch({
      type: types.changeRutaActual,
      payload: copyProfileSelect.routes.length - 1
    });

    dispatch({
      type: types.updateRutaSelect,
      payload: copyProfileSelect.routes[copyProfileSelect.routes.length - 1]
    });

    const indexprofile = profiles.findIndex(
      (profile) => profile.id === profileSelect.id
    );
    if (indexprofile !== -1) {
      profiles[indexprofile] = copyProfileSelect;
      updateAllProfiles(profiles, getToken());
    } else {
      console.error("No se encontró el perfil en la matriz.");
    }

  };

  return (
    <div className={style.gestionRoutes}>
      <button
        className={style.buttonAddRoute}
        style={{ marginRight: "7px" }}
        onClick={() => addRoute()}
      >
        Agregar Ruta
      </button>

      <button className={style.buttonDeleteRoute} onClick={delRoute}>
        Eliminar Ruta
      </button>
    </div>
  );
}

export { GestionRutasAdmin };

{
  /* <br /> */
}
