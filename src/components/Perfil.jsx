import React, { useEffect } from "react";


//   modulo o hub que identifica los elemento y al mover nos da un apropiedades para trabajar con ellos 
import { useSortable} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


function Perfil({ perfil,column}) {


    // cons entas funcion al pasarle el perfil  no devuleve unos atributos apra poder trabajar con cada perfil
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: perfil.id,
        data: {
            type: 'perfil',
            columnid:column.id
        }
    
    
    })
    // estilos para que cuando se arratre el objecto haga algo diferente con esto ya se mueve pero no cambian por que el estado siempre es el mismo hay que alterarlo 
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        position: 'relative',
    }

    if(isDragging){

        return (
            <div ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="perfil"
            style={style}>
                <h1>perfil.name</h1>
            </div>       
             );
    }

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="perfil">
            <h1>{perfil.name}</h1>
        </div>
    );


}

export default Perfil;