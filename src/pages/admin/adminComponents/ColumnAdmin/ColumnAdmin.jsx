import React, { useContext, useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useActivate } from "../../../../hooks/useActivateCard";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";

import PerfilAdmin from "../perfilAdmin/PerfilAdmin";

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
  PointerSensor,
  useDroppable,
  rectIntersection
} from "@dnd-kit/core";

import style from "./ColumnAdmin.module.css";

// function Column({ column }) {
//   const [state, dispatch] = useContext(GlobalContext);
//   const { profiles } = state;

//   const { setNodeRef ,isOver} = useDroppable({
//     id: column.id,
//     data: {
//       name: column.name,
//       type: "column"
//     }
//   });

//   const currentColumn =
//     profiles.filter((profile) => profile.column == column.id) || [];

//   return (
//     <div className={style.containColumns}>
//       <div className={style.column} ref={setNodeRef}>
//         <SortableContext items={currentColumn}>
//           {currentColumn.map((profile, index) => (
//             <Perfil key={`perfil-${index}`} profile={profile} />
//           ))}
//         </SortableContext>
//       </div>
//       <div className={style.idColumn}>{column.name}</div>
//     </div>
//   );
// }

function ColumnAdmin({ column }) {
  const [state] = useContext(GlobalContext);
  const { profiles } = state;
  const { setNodeRef, isOver } = useDroppable({
    id: column.name,
    data: {
      idColumn: column.id,
      name: column.name,
      type: "column"
    },
    strategy: rectIntersection
  });

  const currentColumn =
    profiles.filter((profile) => profile.column === column.id) || [];

  return (
    <div className={style.containColumns} ref={setNodeRef}>
      <div className={style.column}>
        <SortableContext id={`column-${column.id}`} items={currentColumn}>
          {currentColumn.map((profile, index) => (
            <PerfilAdmin key={`perfil-${index}`} profile={profile} />
          ))}
        </SortableContext>
      </div>
      <div className={style.idColumn}>{column.name}</div>
    </div>
  );
}

export default ColumnAdmin;
