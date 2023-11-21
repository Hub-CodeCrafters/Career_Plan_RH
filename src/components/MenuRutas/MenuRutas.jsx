import { useState, useContext } from 'react';
import { GlobalContext } from '../../state/global';
import { types } from '../../state/globalReducer';
export default function MenuRutas() {
    const [state, dispatch] = useContext(GlobalContext)
    let { idSelected, rutas, rutaActual } = state
  
    let [page, setPage] = useState(1)
  
    const changeRuta = () => {
      if (page == rutas.length) {
        dispatch({ type: types.changeRutas, payload: 0 })
        setPage(1)
      } else {
        dispatch({ type: types.changeRutas, payload: page++ })
        setPage(page++)
      }
  
    }
    return (
      <div style={{ position: "absolute", top: "1vh", width: "100vw" }}>
        {idSelected && <center>
          <button className='botton' onClick={changeRuta}>Mostrar otra ruta</button>
          <span>{page}  de {rutas.length}</span>
        </center>}
      </div>
    )
  }