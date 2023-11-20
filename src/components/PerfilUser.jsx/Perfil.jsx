import React, { useContext } from "react";
import { useActivate } from "../../hooks/useActivateCard";


import { GlobalContext } from "../../state/global";
import { types } from "../../state/globalReducer";


function Perfil({ perfil }) {

    let { activate, handleActivate } = useActivate()

    const [state, dispatch] = useContext(GlobalContext)

    let { idSelected, rutas, rutaSeleccionada, rutaActual } = state


    let perfilId = perfil.id
    let rutasPerfil = perfil.routes
    
    const onClick = () => {
        handleActivate()
        dispatch({ type: types.changeId, payload: { perfilId, rutasPerfil } })
    };

    return (
        <div

            className={`perfil ${activate && idSelected === perfil.id ? "activate" : "" || rutaSeleccionada?.includes(perfil.id) ? "activate-r" : "noActivate-r"}`}
            onClick={onClick}>
            <h1>{perfil.name}</h1>

        </div>
    );


}

export default Perfil;