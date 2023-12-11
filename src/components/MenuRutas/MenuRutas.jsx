import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../state/global';
import { types } from '../../state/globalReducer';
export default function MenuRutas({ ruta, profiles }) {
  const [state, dispatch] = useContext(GlobalContext)
  let { idSelected, rutas, perfil } = state

  var [page, setPage] = useState()
  useEffect(() => { setPage(ruta) }, [ruta])
  const changeRuta = (increment) => {
    page += increment;
    if (page === rutas.length) {
      dispatch({ type: types.changeRutas, payload: 0 })
    } else if (page === -1) {
      dispatch({ type: types.changeRutas, payload: rutas.length - 1 });
    } else {
      dispatch({ type: types.changeRutas, payload: page });
    }
  }

  const addRoute = () => {
    const perfil = profiles.find((perfil) => perfil.id == idSelected);
    perfil.routes.push([]);
    var data = profiles.filter((profile) => profile.column === perfil.column);
    fetch('http://localhost:3000/profiles/' + perfil.column, {
      mode: "cors",
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: perfil.column,
        data: data
      })
    }).then(response => response.json())
      .then(newPerson => console.log(newPerson));
    var nuevoIndex = perfil.routes.length - 1;
    var nuevasRutas = perfil.routes;
    var rutaSeleccionada = perfil.routes[nuevoIndex]
    dispatch({ type: types.updateProfiles, payload: { profiles, nuevoIndex, nuevasRutas, rutaSeleccionada } });
  }

  const delRoute = () => {
    const perfil = profiles.find((perfil) => perfil.id == idSelected);
    perfil.routes.splice(page, 1);
    var data = profiles.filter((profile) => profile.column === perfil.column);
    fetch('http://localhost:3000/profiles/' + perfil.column, {
      mode: "cors",
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: perfil.column,
        data: data
      })
    }).then(response => response.json())
      .then(newPerson => console.log(newPerson));
    var ruta = perfil.routes[page - 1];
    var indexRuta = page - 1;
    if (page === 0) {
      ruta = perfil.routes[page];
      indexRuta = 0;
    }
    var eliminarRuta = true; 
    dispatch({ type: types.updateProfiles, payload: { profiles, eliminarRuta, indexRuta, ruta } });
  }

  return (
    <div >
      {idSelected != 0 && <center>
        <h1 style={{ color: "white", margin: "5vh 0 " }}>{perfil}</h1>
        <button className='botton' onClick={() => changeRuta(-1)}>&#60;</button>
        <span style={{ color: "white", marginLeft: "7px", marginRight: "7px" }}>ruta {page + 1} de {rutas.length}</span>
        <button className='botton' onClick={() => changeRuta(1)}>&#62;</button>
        <br />
        {rutas[0].length > 0 && <button className='botton' style={{ marginRight: "7px" }} onClick={addRoute}> &#43; </button>}
        {rutas.length > 1 && <button className='botton' onClick={delRoute}> &#215; </button>}
      </center>}

    </div>
  )
}