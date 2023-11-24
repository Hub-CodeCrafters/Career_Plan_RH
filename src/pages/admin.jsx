import React, { useEffect, useState } from 'react';


import "../assets/admin.css"

import {
  DndContext,
  closestCenter,
  DragOverlay,
  useSensors,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";

import {
  SortableContext,
} from "@dnd-kit/sortable";

import Columns from "../components/Columns"
import { createPortal } from 'react-dom';

// data
import MenuLateral from '../components/menuLateral/menuLateral';
import GlobalProvider from '../state/global';
import useDataFetch from '../hooks/useFetch';


function Admin() {
  const [columns, setColums] = useState([]);
  //const [currentProfiles, setCurrentPerfiles] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/columns')
        .then(res => {
          if (!res.ok) {
            throw Error('Error fetching users data');
          }
          return res.json();
        })
        .then(data => {
          setColums(data);
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
  }, ['http://localhost:3000/columns']);

  var { data:currentProfiles, error, isLoading, refetch, setData } = useDataFetch(
    "http://localhost:3000/profiles"
  );
  const [profileActive, setProfileActive] = useState(null);


  // funcion que cambia el perfil la pocicion de un perfil  siempre y cuando hallan perfiles 
  const handleDragEnd = (event) => {
    // sacamos los atributos de los perfiles activos y los de destino
    const { active, over } = event;
    if (active && over && active.data.current.type === 'perfil' && over.data.current.type === 'perfil' && active.id !== over.id) {
      // sacamos los id activos y los id de destino
      const profileId = active.id;
      const destinationProfileId = over.id;
      // esto recorre la coluna y despues recorre los perfiles  dentro de la coluna par aver si encuentra alguna coincidencia y retorna el indice del la coluna donde esta el perfil  o -1
      const indexProfilId = active.data.current.columnid;
      const indexDestinationProfileId = over.data.current.columnid;
      // creamos una copia de los perfiles 
      const updatedPerfiles = [...currentProfiles];
      // si encontro el indece del perfil activo y el de destino entramo al if para actaulizar la información
      if (indexProfilId !== -1 && indexDestinationProfileId !== -1) {
        //  entramoas a la coluna y buscamos el perfil  activoy guardamos los resultados en source profile index
        const ProfileIndex = updatedPerfiles.findIndex((profile) => profile.id === profileId);
        // aca entramos ala coluna de destino donde queremos mover el perfil y buscarmos si esta el perfil hay 
        const destinationProfileIndex = updatedPerfiles.findIndex((profile) => profile.id === destinationProfileId);
        // aca removemos el perfil de la coluna  y lo guardamos en un array
        let movedProfile = updatedPerfiles.splice(ProfileIndex, 1)[0];
        movedProfile.column = indexDestinationProfileId;
        // aca agregamos el perfil en la coluna de destino en el indice que encontramos
        updatedPerfiles.splice(destinationProfileIndex, 0, movedProfile);
        // actualizamos el estado con el nuevo array de perfiles modificados 
        setData(updatedPerfiles);
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
    //const name = active.data.current.name
    setProfileActive(active.data.current)
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  return (
    <GlobalProvider>
      <section className='section'>
        <div className='config'>
          <MenuLateral perfiles={currentProfiles}/>
        </div>
        <div className='result'>
          <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
            <SortableContext items={columns}  >
              {columns.map((column, index) => (
                <Columns column={column} perfiles={currentProfiles.filter((profile) =>profile.column == column.id)} key={"column" + index} />
              ))}
            </SortableContext>
            {
              createPortal(

                <DragOverlay>
                  <p className='moving'>{profileActive ? profileActive.name : ""}</p>
                </DragOverlay>, document.body

              )}
          </DndContext>
        </div>
      </section>
    </GlobalProvider>

  );
}


export default Admin;