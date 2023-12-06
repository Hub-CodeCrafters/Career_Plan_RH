import React, { useContext, useEffect, useState } from "react";
import { SortableContext, useSortable, verticalListSortingStrategy, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Perfil from "./Perfil";
import { GlobalContext } from "../state/global";
import { types } from "../state/globalReducer";

function Columns({ column, perfiles }) {
    const [state, dispatch] = useContext(GlobalContext);
    useEffect(() => {
        dispatch({ type: types.updateProfiles, payload: perfiles })
    },[]);

    const profilesForColumn = perfiles.filter((profile) => profile.column == column.id) || [];
    return (
        <div className="containColumns">
            <div
                className="column"
            >
                <SortableContext items={profilesForColumn}>
                    <Perfil perfil={{
                        id: column.id+500,
                        columnid: column.id,
                        routes: [],
                        estudios: [],
                        experiencia: [],
                        habilidades: [],
                        competencias: [],
                        name: ""
                    }} column={column} display={false}/>
                    {profilesForColumn.map((perfil, index) => (
                        <Perfil perfil={perfil} column={column} key={"profile" + index} />
                    ))}
                </SortableContext>
            </div>
            <div className="idColumn">{column.name}</div>
        </div>
    );
}

export default Columns;