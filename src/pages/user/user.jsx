import React, { useContext, useEffect, useState } from 'react';


import style from "../admin/admin.module.css"


// data

import { GlobalContext } from "../../Contexts/global";
import Lines from '../../components/Graphics/Lines';
import { types } from '../../Contexts/globalReducer';

import MenuLateralUser from './userComponents/menuLateralUser/menuLateralUser'
import ContentUser from './userComponents/contentUser/ContentUser';

function User() {

  const [state, dispatch] = useContext(GlobalContext);
  const {profiles,columns} = state;

  return (
    <>
      {profiles && (<section className={style.section}>
        {/* <Lines rutaSeleccionada={rutaSeleccionada} idSelected={idSelected} profiles={profiles}/> */}
        <div className={style.config} >
          <MenuLateralUser perfiles={profiles} columns={columns} />
        </div>
        <div className={style.content}>
          <ContentUser/>
        </div>
      </section>)}
    </>
  );
}


export default User;