import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../Contexts/global";
import { types } from "../../Contexts/globalReducer";
import style from "./StudyManagement.module.css";
import { RemoveStudiesAdmin } from "../../pages/admin/adminComponents/RemoveStudiesAdmin/RemoveStudiesAdmin";
import { AddStudiesToProfile } from "../../pages/admin/adminComponents/AddStudiesToProfile/AddStudiesToProfile";

function StudyManagement() {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect, paginaActual } = state;
  const [studes, setStudes] = useState([]);

  useEffect(() => {
    const copyProfileSelect = { ...profileSelect };
    const studes = copyProfileSelect?.estudios;
    setStudes(studes);
  }, [profileSelect]);

  const handle = () => {
    console.log("funcionado");
  };

  return (
    <div className={style.Content}>
      {profileSelect && (
        <div className={style.studyGeneral}>
          <h3 className={style.studyTitle}>Estudios Necesarios</h3>
          {studes.map((study) => (
            <div key={study.tipo} className={style.study}>
              <p className={style.studyRequiremen}>{study.tipo}</p>
              <p className={`${style.studyRequiremen} ${style.color}`}>
                {study.calidad}
              </p>
              {paginaActual === "admin" && (
                <RemoveStudiesAdmin tipo={study.tipo} />
              )}
            </div>
          ))}
        </div>
      )}
      {paginaActual === "admin" && <AddStudiesToProfile />}
    </div>
  );
}

export { StudyManagement };
