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
        if(activate){
            dispatch({ type: types.changeId, payload: { perfilId, rutasPerfil } })
            handleActivate()
        }else{
            dispatch({ type: types.resetState})
            handleActivate()
        }
   
    };

    if(perfil.id == 1){
        console.log(activate, idSelected === perfil.id)
    }

    return (
        <div
            style={{ height: "40px !important" }}
            className={`perfil ${idSelected === perfil.id ? "activate" : "" || rutaSeleccionada?.includes(perfil.id) ? "activate-r" : "noActivate-r"}`}
            onClick={onClick}>
            <div className="perfilName" style={{ fontSize: "8px" }}>
                <h1>{perfil.name}</h1>
            </div>
        </div>
    );


}

export default Perfil;