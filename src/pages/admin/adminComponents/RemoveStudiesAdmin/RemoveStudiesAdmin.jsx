import { useContext } from "react";

import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";
import style from "./RemoveStudiesAdmin.module.css";
import { updateAllProfiles } from "../../../../services/profileServices";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";
function RemoveStudiesAdmin({ tipo }) {
  const [state, dispatch] = useContext(GlobalContext);

  const { profileSelect, profiles } = state;

  const handelRemoveStudies = () => {
    const copyProfileSelect = { ...profileSelect };
    const StudySelectIndex = copyProfileSelect.estudios.findIndex(
      (study) => study.tipo === tipo
    );

    if (StudySelectIndex !== -1) {
      console.log("funcionando");
      copyProfileSelect.estudios.splice(StudySelectIndex, 1);
      dispatch({ type: types.profileSelect, payload: copyProfileSelect });

      const copyProfiles = [...profiles];

      const profileId = profileSelect.id;

      const copyProfileIndex = copyProfiles.findIndex(
        (profile) => profile.id === profileId
      );
      copyProfiles[copyProfileIndex] = copyProfileSelect;
      dispatch({ type: types.allProfiles, payload: copyProfiles });
      updateAllProfiles(copyProfiles, getToken());
    }
  };

  return (
      <button className={style.studyDelete} onClick={handelRemoveStudies}>
        Eliminar
      </button>
 
  );
}

export { RemoveStudiesAdmin };
