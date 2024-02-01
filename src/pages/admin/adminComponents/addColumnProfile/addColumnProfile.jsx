import React, { useContext, useState } from "react";

import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer"

import style from "./addColumnProfile.module.css";

import { updateAllProfiles, updateProfilesColumn } from "../../../../services/profileServices";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";

const AddColumnProfile = () => {
  
  const [state, dispatch] = useContext(GlobalContext);
  const { profiles, columns } = state;

  const { idSelected } = state;
  
  const [valores, setValores] = useState({
    nivel: 1,
    perfil: ''
  });

  const addProfile = (e) => {
    e.preventDefault();

    const updatedProfiles = JSON.parse(JSON.stringify(profiles));

    const ids = updatedProfiles.map((profile) => profile.id);
    const max = Math.max(...ids);

    const newProfile = {
      id: max + 1,
      column: valores.nivel,
      name: valores.perfil,
      routes: [[]],
      estudios: [],
      experiencia: [],
      habilidades: [],
      competencias: [],
    };

    updatedProfiles.push(newProfile);
    document.getElementById("myForm").reset();
    console.log(updatedProfiles);
    dispatch({ type: types.allProfiles, payload: updatedProfiles});
    updateAllProfiles(updatedProfiles,getToken());
  };
  return (
    <section className={style.section}>
        <form id="myForm">
          <h1 className={style.nameSection}>Agregar Perfil</h1>
          <p className={style.subTitle}>Seleccione el nivel y digite el nombre del perfil a añadir.</p>
          <div className={style.opciones}>
            <div className={style.opcionOne}>
              <label className={style.labelOpcion}>Nivel</label>
              <select className={style.levels} onChange={(e) => setValores({ ...valores, nivel: parseInt(e.target.value) })}>

                {
                  columns.map((column, index) => (
                    <option key={"opt" + index} value={column.id}>{column.name}</option>
                  ))
                }
              </select>
            </div>
            <div className={style.opcionTwo}>
              <label className={style.labelOpcion} >Nombre del Perfil</label>
              <input className={style.namePerfil} type="text" id="name" name="name" onChange={(e) => setValores({ ...valores, perfil: e.target.value })} />
            </div>
          </div>
          <button className={style.button} onClick={addProfile}>Agregar perfil</button>
        </form>
    </section>
  )
}
export default AddColumnProfile;
