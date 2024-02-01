import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";
import style from "./AddStudiesToProfile.module.css";

import {updateAllProfiles} from "../../../../services/profileServices";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";

const AddStudiesToProfile = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect,profiles } = state; // Corregido el nombre de la variable
  const [showForm, setShowForm] = useState(false); // Renombrada la variable para mayor claridad
  const [newStudy, setNewStudy] = useState({
    tipo: "",
    calidad: ""
  });

  const handleShowAddStudies = () => {
    setShowForm(true);
  };

  const handleAddStudies = () => {
    const copyProfileSelect = { ...profileSelect };
    const copyStudies = [...copyProfileSelect.estudios];
    copyStudies.push(newStudy);
    copyProfileSelect.estudios = copyStudies;
    dispatch({type: types.profileSelect,payload: copyProfileSelect});

    const copyProfiles=[...profiles];
    const indexProfile=copyProfiles.findIndex(profile=>profile.id===copyProfileSelect.id);
    copyProfiles[indexProfile]=copyProfileSelect;

    dispatch({type: types.allProfiles,payload: copyProfiles});
    updateAllProfiles(copyProfiles,getToken());
    setShowForm(false); 
  };

  const handleTextareaChange = (e) => {
    setNewStudy({
      ...newStudy,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={style.showAddStudes}>
      <hr></hr>
      {!showForm && (
        <button
          className={style.addStudesButtom}
          onClick={handleShowAddStudies}
        >
          Agregar Estudios
        </button>
      )}

      {showForm && (
        <div className={style.contentStudes}>
          <h3 className={style.studesH3}>Agregue el tipo y Calidad</h3>
          <textarea
            className={style.studesTextarea}
            type="text"
            placeholder="Tipo de estudio"
            name="tipo"
            onChange={handleTextareaChange}
          />
          <textarea
            className={`${style.studesTextarea} ${style.studesTextareaCalidad}`}
            type="text"
            placeholder="Calidad"
            name="calidad"
            onChange={handleTextareaChange}
          />
          <button className={style.studesSave} onClick={handleAddStudies}>Guardar</button>
        </div>
      )}
    </section>
  );
};

export { AddStudiesToProfile };
