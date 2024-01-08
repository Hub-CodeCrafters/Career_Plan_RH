import React, { useContext, useEffect, useState } from "react";

import Style from "../../../admin/adminComponents/perfilAdmin/PerfilAdmin.module.css";

function PerfilUser({ profile }) {

  return (
    <div id={profile.id} className={Style.perfil}>
      <span className={Style.perfilName}>{profile.name}</span>
    </div>
  );
}
export default PerfilUser;
