import React, { useEffect, useState } from 'react';

import Routes from "../data/routes"
import "../assets/setting.css"

function Setting({ profileActive }) {

    const [route, setRoute] = useState({})

    const [rutaSelect, setRutaSelect] = useState('')

    function RoutersSelect() {
        // esto simplenetenet es una rray de las claves existentes es apra comprobar si la clave existe dentro del ebject
        const claves = Object.keys(Routes);
        if (claves.includes(profileActive)) {
            setRoute(Routes[profileActive])
        }
        else {
            setRoute({})
        }

    }


    const handleProfiles = (event) => {
        setRutaSelect(event.target.value)
        console.log("evento", event.target.value)

    }

    useEffect(() => {
        RoutersSelect()
    }, [profileActive])


    return (
        <div className="setting">
            <div className='profileSelected' >
                <h4 className='title'>Perfil seleccionado</h4>
                <h4 className='slected'>{profileActive}</h4>
                {
                    profileActive && profileActive !== "" && (
                        <select onChange={handleProfiles} value={rutaSelect}>
                            <option value="">Selecciona una Ruta</option>
                            {Object.keys(route).map((key) => (
                                <option key={key} value={key}>{key}</option>
                            ))}
                        </select>
                    )
                }
                {
                    rutaSelect && rutaSelect !== "" && (
                        <>
                            <p>Perfiles Relacionados a la ruta</p>
                            <select>
                                {route[rutaSelect] &&
                                    route[rutaSelect].map((key) => (
                                        <option key={key} value={key}>
                                            {key}
                                        </option>
                                    ))}
                            </select>
                        </>
                    )
                }

            </div>
        </div>
    )



}


export default Setting;