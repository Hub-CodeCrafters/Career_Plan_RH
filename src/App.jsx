import React, { useState } from 'react';
import './assets/App.css';

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

function App() {
  const [perfiles, setPerfiles] = useState([
    { id: 1, name: 'perfil 1' },
    { id: 2, name: 'perfil 2' },
    { id: 3, name: 'perfil 3' }
  ]);

  const handleDragEnd = () => {
    // Lógica para manejar el final del arrastre
  };

  return (
    <section className='section'>
      <div className='config'></div>
      <div className='result'>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={perfiles} strategy={verticalListSortingStrategy}>
            {perfiles.map((perfil) => (
              <div style={{ width: '20%', backgroundColor: 'lightblue',  padding: '10px', margin: '10px'}}>
                <h1>{perfil.name}</h1>
              </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
}
