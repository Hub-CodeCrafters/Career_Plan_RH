import { useContext, useState } from "react";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import style from "./deleteColumnProfile.module.css";


import {
  updateAllProfiles,
} from "../../../../services/profileServices";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";

const DeleteColumnProfile = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect, profiles} = state;

  const handleDelete = () => {
    const updatedProfiles = JSON.parse(JSON.stringify(profiles));

    const profile = updatedProfiles.find(
      (profile) => profile.id === profileSelect.id
    );

    const index = updatedProfiles.findIndex(
      (profile) => profile.id === profileSelect.id
    );
    updatedProfiles.splice(index, 1);
    dispatch({ type: types.allProfiles, payload: updatedProfiles });
    dispatch({ type: types.resetProfileSelect, payload: null });
    updateAllProfiles(updatedProfiles, getToken());
  };
  return (
        <button className={style.buttonDelete} onClick={(e) => handleDelete()}>
          Eliminar este perfil
        </button>
      
 
  );
};
export default DeleteColumnProfile;
