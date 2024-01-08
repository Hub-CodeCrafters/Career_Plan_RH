import React, { useContext, useEffect, useState } from "react";
import style from "./admin.module.css";

import MenuLateralAdmin from "../admin/adminComponents/menuLateralAdmin/menuLateralAdmin";
import ContentAdmin from "./adminComponents/ContentAdmin/ContentAdmin";

import { GlobalContext } from "../../Contexts/global";
import Lines from "../../components/Graphics/Lines";
import NavigationAdmin from "../admin/adminComponents/navigationAdmin/navegationAdmin";

function Admin() {
  const [state, dispatch] = useContext(GlobalContext);
  const { profiles, columns } = state;

  return (
    <>
      {profiles && (
        <section className={style.section}>
          {/* <Lines rutaSeleccionada={rutaSeleccionada} idSelected={idSelected} profiles={profiles}/> */}
          <div className={style.config}>
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
