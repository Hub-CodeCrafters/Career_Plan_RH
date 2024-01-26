import React, { useContext, useEffect, useState } from "react";
import { types } from "../../Contexts/globalReducer";
import style from "./admin.module.css";

import MenuLateralAdmin from "../admin/adminComponents/menuLateralAdmin/menuLateralAdmin";
import ContentAdmin from "./adminComponents/ContentAdmin/ContentAdmin";

import { GlobalContext } from "../../Contexts/global";
import Lines from "../../components/Graphics/Lines";
import NavigationAdmin from "../admin/adminComponents/navigationAdmin/navegationAdmin";


function Admin() {
  const [state, dispatch] = useContext(GlobalContext);
  const { profiles, columns,paginaActual,profileSelect} = state;
  
  useEffect(() => {
    dispatch({ type:types.paginaActual, payload:"admin"})
  },[])

  return (
    <>
      {profiles && (
        <section className={style.section}>
          <div className={style.config}>
            {profileSelect && <Lines />}
            <MenuLateralAdmin perfiles={profiles} columns={columns} />
          </div>

          <div className={style.content}>
            <NavigationAdmin />
            <ContentAdmin />
        
          </div>
        </section>
      )}
    </>
  );
}

export default Admin;
