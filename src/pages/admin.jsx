import React, { useEffect, useState } from 'react';


import "../assets/admin.css"

import {
  DndContext,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";

import Perfil from "../components/Perfil"
import Columns from "../components/Columns"
import { createPortal } from 'react-dom';

// data


import Perfiles from "../data/perfiles"
import Setting from '../components/Setting';


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
  const [currentProfiles, setCurrentPerfiles] = useState(Perfiles);

  const [profileActive, setProfileActive] = useState("");







// funcion que cambia el perfil la pocicion de un perfil  siempre y cuando hallan perfiles 
const handleDragEnd = (event) => {
  // sacamos los atributos de los perfiles activos y los de destino
  const { active, over } = event;
  if (active && over && active.data.current.type === 'perfil' && over.data.current.type === 'perfil' && active.id !== over.id) {
    // sacamos los id activos y los id de destino
    const profileId = active.id;
    const destinationProfileId = over.id;
    // esto recorre la coluna y despues recorre los perfiles  dentro de la coluna par aver si encuentra alguna coincidencia y retorna el indice del la coluna donde esta el perfil  o -1
    const indexProfilId = currentProfiles.findIndex((column) => column.some((profile) => profile.id === profileId));
    const indexDestinationProfileId = currentProfiles.findIndex((column) => column.some((profile) => profile.id === destinationProfileId));
    // creamos una copia de los perfiles 
    const updatedPerfiles = [...currentProfiles];
    // si encontro el indece del perfil activo y el de destino entramo al if para actaulizar la información
    if (indexProfilId !== -1 && indexDestinationProfileId !== -1) {
      //  entramoas a la coluna y buscamos el perfil  activoy guardamos los resultados en source profile index
      const ProfileIndex = updatedPerfiles[indexProfilId].findIndex((profile) => profile.id === profileId);
      // aca entramos ala coluna de destino donde queremos mover el perfil y buscarmos si esta el perfil hay 
      const destinationProfileIndex = updatedPerfiles[indexDestinationProfileId].findIndex((profile) => profile.id === destinationProfileId);
      // aca removemos el perfil de la coluna  y lo guardamos en un array
      const [movedProfile] = updatedPerfiles[indexProfilId].splice(ProfileIndex, 1);
      // aca agregamos el perfil en la coluna de destino en el indice que encontramos
      updatedPerfiles[indexDestinationProfileId].splice(destinationProfileIndex, 0, movedProfile);
      // actualizamos el estado con el nuevo array de perfiles modificados 
      setCurrentPerfiles(updatedPerfiles);
    }
  }

  if (active.data.current.type === 'perfil' && over.data.current.type === 'column') {
  
    // sacamos los id activos y los id de destino
    const profileId = active.id;
    const destinationColumnId = over.id;
    // esto recorre la columna y después recorre los perfiles dentro de la columna para verificar si encuentra alguna coincidencia y retorna el índice de la columna donde está el perfil o -1
    const indexProfilId = currentProfiles.findIndex((column) => column.some((profile) => profile.id === profileId));
    const indexDestinationColumnId = currentProfiles.findIndex((column) => column.some((profile) => profile.id === destinationColumnId));

    const updatedPerfiles = [...currentProfiles];

    if (active.data.current.type === 'perfil' && over.data.current.type === 'column' && indexProfilId !== -1 && indexDestinationColumnId === -1) {

      const emptyDestinationColumn = updatedPerfiles[destinationColumnId]
      // Si el array de destino está vacío, simplemente puedes agregar el perfil movido a esa columna.
      if (emptyDestinationColumn) {

        const ProfileIndex = updatedPerfiles[indexProfilId].findIndex((profile) => profile.id === profileId);
        const [movedProfile] = updatedPerfiles[indexProfilId].splice(ProfileIndex, 1);


        updatedPerfiles[destinationColumnId - 1].push(movedProfile);
        // // actualizamos el estado con el nuevo array de perfiles modificados 
        setCurrentPerfiles(updatedPerfiles);


      }
    }
  }

};

// funcion apra cuando dan cli al inicio al perfil
function handleDragStart(event) {
  const { active, over } = event;

  const name = active.data.current.name
  setProfileActive(name)



}

return (
  <section className='section'>
    <div className='config'>
      <Setting profileActive={profileActive} />



    </div>
    <div className='result'>
      <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <SortableContext items={columns}  >
          {columns.map((column) => (
            <Columns column={column} perfiles={currentProfiles} />
          ))}
        </SortableContext>
        {
          createPortal(

            <DragOverlay>
              <p className='moving'>Moving</p>
            </DragOverlay>, document.body

          )}
      </DndContext>
    </div>
  </section>
);
}


export default Admin;