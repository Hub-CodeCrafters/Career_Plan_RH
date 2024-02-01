import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import PerfilUser from "../perfilUser/PerfilUser";



import style from "../../../admin/adminComponents/ColumnAdmin/ColumnAdmin.module.css";

function ColumnUser({ column }) {

  const [state] = useContext(GlobalContext);
  const { profiles } = state;

  const currentColumn = profiles.filter((profile) => profile.column === column.id) || [];

  return (
    <div className={style.containColumns}>
      <div className={style.column}>
        {currentColumn.map((profile, index) => (
          <PerfilUser key={`perfil-${index}`} profile={profile} />
        ))}
      </div>
      <div className={style.idColumn}>{column.name}</div>
    </div>
  );
}

export default ColumnUser;
