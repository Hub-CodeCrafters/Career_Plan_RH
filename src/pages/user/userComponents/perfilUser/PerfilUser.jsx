import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../Contexts/global";
 import { types } from "../../../../Contexts/globalReducer";
import Style from "../../../admin/adminComponents/perfilAdmin/PerfilAdmin.module.css";

function PerfilUser({ profile }) {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect,routeSelect,profiles } = state;
  const [activate, setActivate] = useState(false);

  const handleOnClick = () => {
    const copyProfiles = [...profiles];
    const profilefind = copyProfiles.find((p) => p.id === profile.id);

    if (profileSelect) {
      if (profileSelect.id !== profile.id  ) {
        dispatch({ type: types.profileSelect, payload: profilefind });
        setActivate(true);
      }
      if(profileSelect.id ===profile.id){
        dispatch({ type: types.resetProfileSelect, payload: null });
        setActivate(false);
      }
    }else{
      dispatch({ type: types.profileSelect, payload: profilefind });
      setActivate(true);
    }
  
  };
  

  return (
    // este render se repite en admin ver como se modulariza para que 1 funcione en los 2 lados 
    <>
    {profileSelect ? (
      <div
      id={"perfil-" + profile.id}
      className={`${Style.perfil} ${
         profileSelect.id === profile.id ? Style.activate : ''
      } ${routeSelect?.includes(profile.id) ? Style['activate-r'] : Style['noActivate-r']}`}
      onClick={handleOnClick}
    >
      <span className={Style.perfilName}>{profile.name}</span>
    </div>
    ):(
      <div
      id={"perfil-" + profile.id}
      className={`${Style.perfil}`}
      onClick={handleOnClick}
    >
      <span className={Style.perfilName}>{profile.name}</span>
    </div>   
      
      )
    }
    </>
  );
}
export default PerfilUser;
