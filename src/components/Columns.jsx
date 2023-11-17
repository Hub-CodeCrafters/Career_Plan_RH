import React, { useEffect, useState } from "react";
import { SortableContext, useSortable,verticalListSortingStrategy,  } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Perfil from "./Perfil";

function Columns({column,perfiles}) {

    const columnId = parseInt(column.id);
    const profilesForColumn = perfiles[columnId-1] || [];

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging 
    } = useSortable({
        id: column.id,
        data: {
            type: 'column'
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if(isDragging){

        return (
            <div ref={setNodeRef}
            style={style}>
                <h4>moviendose</h4>
            </div>       
             );
    }

    return (

        <div
            ref={setNodeRef}
              {...attributes}
              {...listeners}
              style={style}
            className="column"
        >
            <SortableContext  items={profilesForColumn} >
                {profilesForColumn.map((perfil) => (
                    <Perfil perfil={perfil} column={column} />
                ))}
            </SortableContext>

        </div>
    );
}

export default Columns;