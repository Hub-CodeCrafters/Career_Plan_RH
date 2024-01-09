import React, { useContext, useMemo } from "react";

import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import style from "./SelectedRouteItems.module.css";

const SelectedRouteItems = () => {
  const [state] = useContext(GlobalContext);
  const { profiles, columns, routeSelect } = state;

  const prepareRouteItems = () => {
    return routeSelect.map((profileId) => {
      const profile = profiles.find((p) => p.id === profileId);
      if (profile){
        const column = columns.find((c) => c.id === profile.column);
        return { profile, column };
      } else {
        return null;
      }
    });
  };

//   cada vez que cambiemos la ruta va a a volver a calcular 
  const routeItems = useMemo(
    () => prepareRouteItems(),
    [routeSelect]
  );

  return (
    <div id="rutas" className={style.routes}>
      {routeItems.map(({ profile, column }, index) => (
        <div key={"route" + index} className={style.route}>
          <div className={style.routeColumn}>{column ? column.name : ""}</div>
          <div className={style.routeName}>
            {profile.name}
            <button
              // onClick={(e) => handleDelete(profile.id)}
              style={{
                backgroundColor: "transparent",
                color: "rgb(220, 53, 69)",
                border: "none"
              }}
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
