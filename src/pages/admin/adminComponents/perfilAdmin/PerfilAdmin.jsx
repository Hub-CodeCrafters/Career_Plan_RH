import React, { useContext, useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useActivate } from "../../../../hooks/useActivateCard";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import Style from "./PerfilAdmin.module.css";

import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  useSensors,
  useSensor,
  PointerSensor
} from "@dnd-kit/core";

// function Perfil({ profile }) {
//     // let { activate, handleActivate } = useActivate();
//     // let [activate, setActivate] = useState(true)

//     // //investigar esto apra que es
//     // const handleActivate = () => setActivate(!activate)

//     const [state, dispatch] = useContext(GlobalContext);
//     const { idSelected, rutaSeleccionada, profiles, columns } = state

//     // let perfilId = profiles.id
//     // let columnId = profiles.column
//     // let rutasPerfil = profiles.routes
//     // let estudios = profiles.estudios
//     // let experiencia = profiles.experiencia
//     // let habilidades = profiles.habilidades
//     // let competencias = profiles.competencias
//     // let perfilName = profiles.name

//     // const onClick = () => {
//     //     if (idSelected !== profiles.id) {
//     //         dispatch({ type: types.changeId, payload: {profiles, columnId, rutasPerfil, estudios, experiencia, habilidades, competencias, perfilName } })
//     //         handleActivate();
//     //     } else {
//     //         dispatch({ type: types.resetState, payload: state.profiles })
//     //         handleActivate();
//     //     }
//     // };

//     const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
//         id: profile.id,
//         data: {
//             type: 'perfil',
//             // columnid: columns.id,
//             // name: profile.name,
//             // routes: profile.routes
//         }
//     });

//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition,
//         zIndex: 99
//     }
//     return (
//         <div className={Style.perfil}
//             key={profile.id}
//             id={"perfil-" + profiles.id}
//             ref={setNodeRef}
//             {...attributes}
//             {...listeners}
//             style={style}
//         >
//             <span className={Style.perfilName}>{profile.name}</span>
//         </div>

//         // <SortableContext>
//         //     {
//         //         profilesForColumn.map((profile, index) => (

//         //             <span className={Style.perfilName}>{profile.name}</span>
//         //         ))
//         //     }
//         //     <div
//         //         // id={"perfil-" + profiles.id}
//         //         // ref={setNodeRef}
//         //         // {...attributes}
//         //         // {...listeners}
//         //         // style={style}
//         //         // className={Style.perfil}
//         //         // onClick={onClick}
//         //     >
//         //         <span className={Style.perfilName}>{profile.name}</span>

//         //     </div>
//         // </SortableContext>
//     );
// }

function PerfilAdmin({ profile }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
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
    opacity: isDragging ? 0.5 : 1,
    boxShadow: isDragging ? "0px 0px 10px 5px rgba(0,0,0,0.5)" : ""
  };

  return (
    <div
      ref={setNodeRef}
      id={profile.id}
      {...attributes}
      {...listeners}
      style={style}
      className={Style.perfil}
    >
      <span className={Style.perfilName}>{profile.name}</span>
    </div>
  );
}
export default PerfilAdmin;
