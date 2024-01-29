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
  const {profiles,profileSelect} = state;
  
  useEffect(() => {
    dispatch({ type:types.paginaActual, payload:"user"})
    dispatch({ type: types.resetProfileSelect, payload: null });
  },[])

  return (
    <>
      {profiles && (<section className={style.section}>
        <div className={style.config} >
          {profileSelect && <Lines />}
          <MenuLateralUser />
        </div>
        <div className={style.content}>
          <ContentUser/>
        </div>
      </section>)}
    </>
  );
}


export default User;