import React, { useContext, useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useActivate } from "../../../../hooks/useActivateCard";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import Style from "./PerfilAdmin.module.css";

import {useSortable,} from "@dnd-kit/sortable";


function PerfilAdmin({ profile }) {

  const[ state, dispatch ] = useContext(GlobalContext);

  const{profileSelect,routeSelect}=state



  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: profile.id,
    data: {
      type: "perfil",
      name: profile.name,
      profileColumn: profile.column
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: 99,
    // opacity: isDragging ? 0.5 : 1,
    boxShadow: isDragging ? "0px 0px 10px 5px rgba(0,0,0,0.5)" : ""
  };

  return (
    <>
    {profileSelect ? (
      <div
      id={"perfil-" + profile.id}
      style={style}
      className={`${Style.perfil} ${
         profileSelect.id === profile.id ? Style.activate : ''
      } ${routeSelect?.includes(profile.id) ? Style['activate-r'] : Style['noActivate-r']}`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <span className={Style.perfilName}>{profile.name}</span>
    </div>

    ):(
      <div
      id={"perfil-" + profile.id}
      style={style}
      className={`${Style.perfil}`}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <span className={Style.perfilName}>{profile.name}</span>
    </div>   
      
      )


    }

    </>
    
    
  );
}
export default PerfilAdmin;
