import React, { useEffect, useState } from "react";
import { SortableContext, useSortable, verticalListSortingStrategy, } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Perfil from "./Perfil";

function Columns({ column, perfiles,}) {

    const columnId = parseInt(column.id);

    const profilesForColumn = perfiles || [];

    // const {
    //     attributes,
    //     listeners,
    //     setNodeRef,
    //     transform,
    //     transition,
    // } = useSortable({
    //     id: column.id,
    //     data: {
    //         type: 'column'
    //     }
    // });

    // const style = {
    //     transform: CSS.Transform.toString(transform),
    //     transition,
       
    // };

   
    return (
        <div className="containColumns">
            <div
                className="column"
            >
                <SortableContext items={profilesForColumn}>
                    {profilesForColumn.map((perfil,index) => (
                        <Perfil perfil={perfil} column={column} key={"profile" + index}/>
                    ))}
                </SortableContext>
            </div>
            <div className="idColumn">{column.name}</div>
        </div>
    );
}

export default Columns;