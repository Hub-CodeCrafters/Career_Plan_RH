import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";


import style from "./ContentUser.module.css";
import ColumnUser from "../columnUser/columnUser";

// import style from "../../../admin/adminComponents/ContentAdmin/ContentAdmin.module.css";


function ContentUser() {
  
  const [state, dispatch] = useContext(GlobalContext);
  const { profiles, columns } = state;
 
 
  return (
    <div className={style.result}>
        {columns.map((column, index) => (
          <ColumnUser key={`column-${index}`} column={column} />
        ))}{" "}
  
  </div>
  );
}

export default ContentUser;

// esto era lo que iva en admin
