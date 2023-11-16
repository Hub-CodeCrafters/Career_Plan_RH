import React, { useState } from 'react';


import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";

import Perfil from "../components/Perfil"
import Columns from "../components/Columns"

function Admin() {

  const [colums, setColums] = useState([
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
    { id: 1, name: 'perfil 1' },
    { id: 2, name: 'perfil 2' },
    { id: 3, name: 'perfil 3' }
  ]);
  // const [perfiles_2, setPerfiles_2] = useState([
  //   { id: 4, name: 'perfil 4' },
  //   { id: 5, name: 'perfil 5' },
  //   { id: 6, name: 'perfil 6' }
  // ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // Verifica si el evento se produjo dentro del primer contexto (columna 1)
    if (active && over && active.id !== over.id) {
      console.log("viejo",active.id)
      console.log("nuevo",over.id)
      // const oldIndex = perfiles.findIndex((colums) => colums.id === active.id);
      // const newIndex = perfiles.findIndex((colums) => colums.id === over.id);
     
      // const newOrder = arrayMove(perfiles, oldIndex, newIndex);
      // setPerfiles(newOrder);
    }
  };

  // handleDragOver = (event) => {

  // }
  return (
    <section className='section'>
      <div className='config'></div>
      <div className='result'>
        <DndContext collisionDetection={closestCenter}>
          <SortableContext items={columns} strategy={horizontalListSortingStrategy} onDragEnd={handleDragEndColumns}>
            {columns.map((column) => (
              <Columns key={column.id} column={column}>
                <SortableContext key={column.id} items={perfiles} strategy={verticalListSortingStrategy} onDragEnd={handleDragEndperfiles}>
                  {perfiles.map((profile) => (
                    <Perfil key={perfiles.id} perfil={perfiles} />
                  ))}
                </SortableContext>
              </Columns>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
}


export default Admin;