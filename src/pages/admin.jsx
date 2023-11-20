import React, { useState } from 'react';

import "../assets/admin.css"

import {
  DndContext,
  closestCenter,
  closestCorners,
  DragOverlay
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";

import Perfil from "../components/PerfilUser.jsx/Perfil"
import Columns from "../components/ColumnsUser.jsx/Columns"
import { createPortal } from 'react-dom';

function Admin() {


const [columns, setColums] = useState([
    { id: 1, name: 'coluna 1' },
    { id: 2, name: 'coluna 2' },
    { id: 3, name: 'coluna 3' },
    { id: 4, name: 'coluna 4' },
    { id: 5, name: 'coluna 5' },
    { id: 6, name: 'coluna 6' },
    { id: 7, name: 'coluna 7' },
    { id: 8, name: 'coluna 8' },
    { id: 9, name: 'coluna 9' },
    { id: 10, name: 'coluna 10' },
    { id: 11, name: 'coluna 11' },
    { id: 12, name: 'coluna 12' }
  ]);


  const [perfiles, setPerfiles] = useState([
    [
        { id: 66, column:1,  name: 'perfil 1' },
        { id: 267,column:1 , name: 'perfil 2' },
        { id: 367,column:3,  name: 'perfil 3' }
    ],
    [
        { id: 456, column: 2, name: 'perfil 4' },
        { id: 576, column: 2, name: 'perfil 5' },
        { id: 676, column: 2, name: 'perfil 6' }
    ],
    [
        { id: 7676, column: 3, name: 'perfil 6' },
        { id: 88, column: 3, name: 'perfil 7' },
        { id: 98, column: 3, name: 'perfil 68' }
    ],
    [
        { id: 109, column: 4, name: 'perfil 6' },
        { id: 191, column: 4, name: 'perfil 7d' },
        { id: 192, column: 4, name: 'perfil 68' }
    ],
    [
        { id: 13, column: 5, name: 'perfil 6f' },
        { id: 14, column: 5, name: 'perfil 7f' },
        { id: 15, column: 5, name: 'perfil 68' }
    ],
    [
        { id: 16, column: 6, name: 'perfil 6e' },
        { id: 17, column: 6, name: 'perfil 7' },
        { id: 18, column: 6, name: 'perfil 68' }
    ],
    [
        { id: 19, column: 7, name: 'perfil 65' },
        { id: 20, column: 7, name: 'perfil 7' },
        { id: 21, column: 7, name: 'perfil 68' }
    ],
    [
        { id: 22, column: 8, name: 'perfil 6' },
        { id: 23, column: 8, name: 'perfil 7' },
        { id: 24, column: 8, name: 'perfil 68' }
    ],
    [
        { id: 25, column: 9, name: 'perfil 6' },
        { id: 26, column: 9, name: 'perfil 7' },
        { id: 27, column: 9, name: 'perfil 68' }
    ],
    [
        { id: 28, column: 10, name: 'perfil 6' },
        { id: 29, column: 10, name: 'perfil 7' },
        { id: 30, column: 10, name: 'perfil 68' }
    ],
    [
        { id: 31, column: 11, name: 'perfil 6' },
        { id: 32, column: 11, name: 'perfil 7' },
        { id: 33, column: 11, name: 'perfil 68' }
    ],
    [
        { id: 34, column: 12, name: 'perfil 6' },
        { id: 35, column: 12, name: 'perfil 7' },
        { id: 36, column: 12, name: 'perfil 68' }
    ],
  

]);
 



//   const { active, over } = event;

//   // condicion para pasar elementos de una coluna a otra


//   if (active && over && active.data.current.type === 'perfil' && over.data.current.type === 'perfil' && active.id !== over.id) {
//     // sacamos los id activos y los id de destino
//     const profileId = active.id;
//     const destinationProfileId = over.id;

//     const updatedPerfiles = perfiles.map((perfil) => {
//       // Encuentra la columna que contiene el perfil activo y destino
//       const activeProfileIndex = perfil.findIndex((profile) => profile.id === profileId);
//       const destinationProfileIndex = perfil.findIndex((profile) => profile.id === destinationProfileId);

//       if (activeProfileIndex !== -1 && destinationProfileIndex !== -1) {
//         // Realiza el intercambio dentro de la misma perfil
//         const updatedColumn = [...perfil];
//         const [movedProfile] = updatedColumn.splice(activeProfileIndex, 1);
//         updatedColumn.splice(destinationProfileIndex, 0, movedProfile);

//         return updatedColumn;
//       }

//       return perfil;
//     });

//     setPerfiles(updatedPerfiles);
//   }


// };

const handleDragEnd = (event) => {
  const { active, over } = event;

  if (active && over && active.data.current.type === 'perfil' && over.data.current.type === 'perfil' && active.id !== over.id) {
    const profileId = active.id;
    const destinationProfileId = over.id;
    const sourceColumnIndex = perfiles.findIndex((column) => column.some((profile) => profile.id === profileId));
    const destinationColumnIndex = perfiles.findIndex((column) => column.some((profile) => profile.id === destinationProfileId));

    const updatedPerfiles = [...perfiles];

    if (sourceColumnIndex !== -1 && destinationColumnIndex !== -1) {
      if (over.data.current.column !== active.data.current.column) {
        // Mover el perfil a otra columna diferente
        const movedProfileIndex = updatedPerfiles[sourceColumnIndex].findIndex((profile) => profile.id === profileId);
        const movedProfile = updatedPerfiles[sourceColumnIndex][movedProfileIndex];
        updatedPerfiles[sourceColumnIndex].splice(movedProfileIndex, 1);
        updatedPerfiles[destinationColumnIndex].push(movedProfile);
      } else {
        // Mover el perfil dentro de la misma columna
        const sourceProfileIndex = updatedPerfiles[sourceColumnIndex].findIndex((profile) => profile.id === profileId);
        const destinationProfileIndex = updatedPerfiles[destinationColumnIndex].findIndex((profile) => profile.id === destinationProfileId);
        const [movedProfile] = updatedPerfiles[sourceColumnIndex].splice(sourceProfileIndex, 1);
        updatedPerfiles[destinationColumnIndex].splice(destinationProfileIndex, 0, movedProfile);
      }
      setPerfiles(updatedPerfiles);
    }
  }
};


  return (
    <section className='section'>
      <div className='config'></div>
      <div className='result'>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
          <SortableContext items={columns} >
            {columns.map((column) => (
              <Columns column={column} perfiles={perfiles} key={column.id}/>
            ))}
          </SortableContext>
        {
          createPortal(
          
          <DragOverlay>
            <h4>Moviendose</h4>
          </DragOverlay>,document.body

        )}
        </DndContext>
      </div>
    </section>
  );
}


export default Admin;