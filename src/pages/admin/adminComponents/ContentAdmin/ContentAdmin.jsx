import React, { useContext, useEffect, useState } from "react";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GlobalContext } from "../../../../Contexts/global";
import { types } from "../../../../Contexts/globalReducer";
import { createPortal } from "react-dom";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import {
  DndContext,
  closestCenter,
  DragOverlay,
  useSensors,
  useSensor,
  PointerSensor,
  rectIntersection,
  closestCorners,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  pointerWithin
} from "@dnd-kit/core";

import ColumnAdmin from "../ColumnAdmin/ColumnAdmin";
import { getToken } from "../../../../utils/generalUtils/tokenUtils";

import style from "./ContentAdmin.module.css";
import Style from "../perfilAdmin/PerfilAdmin";

import {
  getProfilesByColumnId,
  changeProfilePositionInColumn,
  moveProfileToColumn
} from "../../../../utils/Admin_utils/contentUtils";
import {
  updateProfilesColumn,
  updateAllProfiles
} from "../../../../services/profileServices";

function Content() {
  const [state, dispatch] = useContext(GlobalContext);
  // Accedes a la propiedad profiles desde el estado global
  const { profiles, columns } = state;

  const [activeId, setActiveId] = useState(false);

  // funcion apra cuando dan cli al inicio al perfil
  function handleDragStart(event) {
    const { active, over } = event;
    setActiveId(true);
  }

  function habldeDragOver(event) {
    const { active, over } = event;
    changeProfilePositionInColumn(event, profiles, dispatch, types);
    moveProfileToColumn(event, profiles, dispatch, types);
  }

  const handleDragEnd = (event) => {
    const updatedProfiles = profiles;
    console.log(updatedProfiles);
    updateAllProfiles(updatedProfiles, getToken());
  };
  return (
    <div className={style.result}>
      <DndContext
        collisionDetection={rectIntersection}
        onDragEnd={handleDragEnd}
        onDragOver={habldeDragOver}
        onDragStart={handleDragStart}
      >
        {columns.map((column, index) => (
          <ColumnAdmin key={`column-${index}`} column={column} />
        ))}{" "}
        {activeId &&
          createPortal(
            <DragOverlay>
              {
                <div className={Style.perfil}>
                  <span className={Style.perfilName}>Name Perfil</span>
                </div>
              }
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </div>
  );
}

export default Content;

// esto era lo que iva en admin
