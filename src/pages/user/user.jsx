import React, { useContext, useEffect, useState } from 'react';
import style from "../admin/admin.module.css"
import { GlobalContext } from "../../Contexts/global";
import { types } from '../../Contexts/globalReducer';


// componetes generales
import Lines from '../../components/Graphics/Lines';
import MenuLateral from '../../components/menuLateral/menuLateral';

// componetes user
import ContentUser from './userComponents/contentUser/ContentUser';

function User() {

  const [state, dispatch] = useContext(GlobalContext);
  const {profiles,profileSelect} = state;
  
  useEffect(() => {
    dispatch({ type:types.paginaActual, payload:"user"})
    dispatch({ type: types.resetProfileSelect, payload: null });
    dispatch({ type: types.buttomActual, payload: null });
  },[])

  return (
    <>
      {profiles && (<section className={style.section}>
        <div className={style.config} >
          {profileSelect && <Lines />}
          <MenuLateral />
        </div>
        <div className={style.content}>
          <ContentUser/>
        </div>
      </section>)}
    </>
  );
}


export default User;