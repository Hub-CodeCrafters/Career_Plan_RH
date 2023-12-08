import React, { useState } from 'react';
import "../assets/admin.css"
import {
  SortableContext,
} from "@dnd-kit/sortable";
import Columns from "../components/ColumnsUser.jsx/Columns"
import GlobalProvider from '../state/global';
import MenuRutas from '../components/MenuRutas/MenuRutas';
import RequisitosUser from '../components/RequisitosUser.jsx/RequisitosUser';



function User() {
  const [profileActive, setProfileActive] = useState("");

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



  const [perfiles, setPerfiles] = useState(data);

  return (
    <section className='section'>
      <GlobalProvider>
        <div className='config'>
          {/* <Setting profileActive={profileActive} /> */}
          <MenuRutas />
          <RequisitosUser />
        </div>
        <div className='result'>
          <SortableContext items={columns} >
            {columns.map((column) => (
              <Columns column={column} perfiles={perfiles} key={column.id} />
            ))}
          </SortableContext>
        </div>
      </GlobalProvider>
    </section>
  );
}


export default User;

