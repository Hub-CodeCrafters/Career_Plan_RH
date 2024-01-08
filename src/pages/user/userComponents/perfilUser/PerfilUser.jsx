import React, { useContext, useEffect, useState } from "react";

import Style from "../../../admin/adminComponents/perfilAdmin/PerfilAdmin.module.css";

function PerfilUser({ profile }) {

  const handleOnClick = () => {
    console.log("click");
  };

  return (
    <div id={profile.id} className={Style.perfil} onClick={handleOnClick}>
      <span className={Style.perfilName}>{profile.name}</span>
    </div>
  );
}
export default PerfilUser;
