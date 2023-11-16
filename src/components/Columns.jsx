import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Perfil from "./Perfil";




function Columns({column}) {

    

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    }=useSortable({
        id: column.id,
        data: {
            type: 'column'
        }
    })

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
        className="column">
            <h1>{column.name}</h1>
            <Perfil perfil={perfil}/>
        </div>
    );
}



export default Columns;
