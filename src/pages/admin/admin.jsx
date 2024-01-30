import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Contexts/global";
import { types } from "../../Contexts/globalReducer";
import style from "./admin.module.css";

// componetes Generales
import MenuLateral from "../../components/menuLateral/menuLateral";
import ContentAdmin from "./adminComponents/ContentAdmin/ContentAdmin";
import Lines from "../../components/Graphics/Lines";

// componetes Admin
import NavigationAdmin from "../admin/adminComponents/navigationAdmin/navegationAdmin";


function Admin() {
  const [state, dispatch] = useContext(GlobalContext);
  const { profiles, columns,paginaActual,profileSelect} = state;
  
  useEffect(() => {
    dispatch({ type:types.paginaActual, payload:"admin"})
    dispatch({ type: types.resetProfileSelect, payload: null });
  },[])

  return (
    <>
      {profiles && (
        <section className={style.section}>
          <div className={style.config}>
            {profileSelect && <Lines />}
            <MenuLateral />
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
