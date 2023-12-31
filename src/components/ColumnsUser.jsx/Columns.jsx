import React from "react";
import { SortableContext } from "@dnd-kit/sortable";
import Perfil from "../PerfilUser.jsx/Perfil";

function Columns({ column, perfiles }) {

    const columnId = parseInt(column.id);
    const profilesForColumn = perfiles[columnId - 1] || [];

    return (
        <div
            className="containColumns"
        >
            <div className="column">
            <SortableContext items={profilesForColumn} >
                {profilesForColumn.map((perfil) => (
                    <Perfil perfil={perfil} column={column} />
                ))}
            </SortableContext>
            </div>
            <div className="idColumn">{column.id}</div>
        </div>
    );
}

export default Columns;