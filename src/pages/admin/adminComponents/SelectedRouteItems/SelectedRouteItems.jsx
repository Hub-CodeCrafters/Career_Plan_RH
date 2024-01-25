import React, { useContext, useMemo } from "react";

import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import style from "./SelectedRouteItems.module.css";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";
import { updateAllProfiles } from "../../../../services/profileServices";

const SelectedRouteItems = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const { profiles, columns, routeSelect, profileSelect, rutaActual } = state;
  const prepareRouteItems = () => {

    if (routeSelect) {
      return routeSelect.map((profileId) => {
        const profile = profiles.find((profile) => profile.id === profileId);
        if (profile) {
          const column = columns.find((c) => c.id === profile.column);
          return { profile, column };
        } else {
          return null;
        }
      });
    }
    else {
      return []
    }
   
  };

  //   cada vez que cambiemos la ruta va a a volver a calcular
  const routeItems = useMemo(() => prepareRouteItems(), [routeSelect]);

  //  funcion encargada de eliminar el perfil de la ruta actual
  const handleDelete = (profile) => {
    let copyRouteSelect = [...routeSelect];
    const indexToRemove = copyRouteSelect.findIndex((p) => p === profile.id);

    if (indexToRemove !== -1) {
      copyRouteSelect.splice(indexToRemove, 1);
      const copyProfileselect = { ...profileSelect };
      copyProfileselect.routes[rutaActual] = copyRouteSelect;

      dispatch({
        type: types.profileSelect,
        payload: copyProfileselect
      });

      const profileEncontrado = profiles.findIndex(
        (p) => p.id === profileSelect.id
      );
      if (profileEncontrado !== -1) {
        profiles[profileEncontrado] = { ...profileSelect };
        updateAllProfiles(profiles, getToken());
      }
    }
  };


  return (
    <div id="rutas" className={style.routes}>
      <h3 className={style.routesTitle}>Perfiles en la Ruta</h3>
      {routeItems.map(({ profile, column }, index) => (
        <div key={"route" + index} className={style.route}>
          <div className={style.routeColumn}>{column ? column.name : ""}</div>
          <div className={style.routeName}>
            {profile.name}
            <button
              className={style.deleteButton}
              onClick={(e) => handleDelete(profile)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { SelectedRouteItems };
