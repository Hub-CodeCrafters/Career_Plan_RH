import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import style from "./AddProfileRoute.module.css";
import { updateAllProfiles } from "../../../../services/profileServices";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";

const AddProfileRoute = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const { rutaActual, profiles, columns,routeSelect,profileSelect } = state;

  const [isNewProfileInRoute, setNewProfileInRoute] = useState(false);

  const [profilesInColumn, setProfilesInColumn] = useState( profiles?.filter((profile) => profile.column == 1));

  const [valores, setValores] = useState({
    nivel: profilesInColumn[0]?.column,
    perfil: profilesInColumn[0]
  });
  const addProfilesFromColumn= (Idcolumn) => {

    const profilesOptions = profiles?.filter((profile) => profile.column == Idcolumn);
    setProfilesInColumn(profilesOptions);

    setValores({
        nivel: profilesOptions[0]?.column,
        perfil: profilesOptions[0]
      });

  };

  const handleSave = () => {
    const copyRouteSelect = [...routeSelect]; 
    copyRouteSelect.push(valores.perfil.id);
    dispatch({ type: types.updateRutaSelect, payload: copyRouteSelect });
    const index = profiles.findIndex((profile) => profile.id === profileSelect.id);
    if (index !== -1) {
        profiles[index].routes[rutaActual] = copyRouteSelect;
        updateAllProfiles(profiles,getToken());
    }
  
    setProfilesInColumn(profiles?.filter((profile) => profile.column == 1));
    setNewProfileInRoute(false);
   

};


  return (
    <div className={style.AddProfileRoute}>
      {!isNewProfileInRoute && (
        <button
          className={style.AddProfileRouteButton}
          onClick={() => {
            setNewProfileInRoute(!isNewProfileInRoute);
          }}
        >
          Relacionar otro Perfil
        </button>
      )}

      {isNewProfileInRoute && (
        <>
          <h3 className={style.titleNivelPerfil}>
            Selecionar el Nivel y Perfil
          </h3>
          <div className={style.contentNivelPerfil}>
            <select
              className={style.columns}
              onChange={(e) => addProfilesFromColumn(e.target.value)}
            >
              {columns.map((column, index) => (
                <option key={"opt" + index} value={column.id}>
                  {column.name}
                </option>
              ))}
            </select>

            <select
              id="select-dinamico"
              className={style.profilescolumns}
              onChange={(e) => {
                setValores({
                  ...valores,
                  perfil: profiles.find((perfil) => perfil.id == e.target.value)
                });
               }}
            >
              {profilesInColumn?.map((option) => (
                <option key={option?.id} value={option?.id}>
                  {option?.name}
                </option>
              ))}
            </select>
             
          </div>
          <button className={style.Guardar} onClick={handleSave}>Guardar</button>
        </>
      )}
    </div>
  );
};

export { AddProfileRoute };

