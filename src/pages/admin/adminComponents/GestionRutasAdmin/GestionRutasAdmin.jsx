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

    // const perfil = profiles.find((perfil) => perfil.id == idSelected);
    // perfil.routes.push([]);
    // var data = profiles.filter((profile) => profile.column === perfil.column);
    // fetch('http://localhost:3000/profiles/' + perfil.column, {
    //   mode: "cors",
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: perfil.column,
    //     data: data
    //   })
    // }).then(response => response.json())
    //   .then(newPerson => console.log(newPerson));
    // var nuevoIndex = perfil.routes.length - 1;
    // var nuevasRutas = perfil.routes;
    // var rutaSeleccionada = perfil.routes[nuevoIndex]
    // dispatch({ type: types.updateProfiles, payload: { profiles, nuevoIndex, nuevasRutas, rutaSeleccionada } });
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
