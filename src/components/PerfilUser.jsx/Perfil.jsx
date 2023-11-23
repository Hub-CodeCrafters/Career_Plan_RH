import React, { useContext } from "react";
import { useActivate } from "../../hooks/useActivateCard";


import { GlobalContext } from "../../state/global";
import { types } from "../../state/globalReducer";


function Perfil({ perfil }) {

    let { activate, handleActivate } = useActivate()

    const [state, dispatch] = useContext(GlobalContext)

    let { idSelected, rutaSeleccionada } = state


    let perfilId = perfil.id
    let rutasPerfil = perfil.routes
    let estudios = perfil.estudios
    let experiencia = perfil.experiencia
    let habilidades = perfil.habilidades
    let competencias = perfil.competencias
    let perfilName = perfil.name

    const onClick = () => {
        if(activate && rutasPerfil){
            dispatch({ type: types.changeId, payload: { perfilId, rutasPerfil, estudios, experiencia, habilidades, competencias, perfilName } })
            handleActivate()
        }else{
            dispatch({ type: types.resetState})
            handleActivate()
        }
   
    };



    return (
        <div
            style={{ height: "40px !important" }}
            className={`perfil ${idSelected === perfil.id ? "activate" : "" || rutaSeleccionada?.includes(perfil.id) ? "activate-r" : "noActivate-r"}`}
            onClick={onClick}>
            <div className="perfilName" style={{ fontSize: "6px" }}>
                <h1>{perfil.name}</h1>
            </div>
        </div>
    );


}

export default Perfil;