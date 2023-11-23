import { useState, useContext } from 'react';
import { GlobalContext } from '../../state/global';
import { types } from '../../state/globalReducer';
export default function MenuRutas() {
    const [state, dispatch] = useContext(GlobalContext)
    let { idSelected, rutas, perfil } = state
  
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
      <div >
        {idSelected != 0 && <center>
          <h1 style={{color:"white", margin:"5vh 0 "}}>{perfil}</h1>
          <button className='botton' onClick={changeRuta}>Mostrar otra ruta</button>
          <span style={{color:"white", marginLeft:"7px"}}>{page} ruta  de {rutas.length}</span>
        </center> }
        
      </div>
    )
  }