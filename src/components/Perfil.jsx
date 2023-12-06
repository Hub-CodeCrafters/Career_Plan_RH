import React, { useContext, useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useActivate } from "../hooks/useActivateCard";
import { GlobalContext } from "../state/global";
import { types } from "../state/globalReducer";

function Perfil({ perfil, column, display = true }) {
    // let { activate, handleActivate } = useActivate();
    let [activate, setActivate] = useState(true)
    const handleActivate = () => setActivate(!activate)

    const [state, dispatch] = useContext(GlobalContext);

    let { idSelected, rutaSeleccionada } = state

    let perfilId = perfil.id
    let columnId = perfil.columnid
    let rutasPerfil = perfil.routes
    let estudios = perfil.estudios
    let experiencia = perfil.experiencia
    let habilidades = perfil.habilidades
    let competencias = perfil.competencias
    let perfilName = perfil.name

    const onClick = () => {
        if (idSelected !== perfil.id) {
            dispatch({ type: types.changeId, payload: { perfilId, columnId, rutasPerfil, estudios, experiencia, habilidades, competencias, perfilName } })
            handleActivate();
        } else{
            dispatch({ type: types.resetState, payload: state.profiles })
            handleActivate();
        }
    };



    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: perfil.id,

        data: {
            type: 'perfil',
            columnid: column.id,
            name: perfil.name,
            routes: perfil.routes
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        visibility: !display && 'hidden',
        width: !display && 0,
        height: !display && 0
    }
    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className={`perfil ${idSelected === perfil.id ? "activate" : "" || rutaSeleccionada?.includes(perfil.id) ? "activate-r" : "noActivate-r"}`}
            onClick={onClick}
        >
            <span className="perfilName">{perfil.name}</span>

        </div>
    );
}

export default Perfil;
