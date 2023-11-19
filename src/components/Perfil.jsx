import React, { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Perfil({ perfil, column}) {
 

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: perfil.id,
       
        data: {
            type: 'perfil',
            columnid: column.id,
            name: perfil.name,
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition, 
     
    }
    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="perfil"
        >
            <span className="perfilName">{perfil.name}</span>
         
        </div>
    );
}

export default Perfil;
