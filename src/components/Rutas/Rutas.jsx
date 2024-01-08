import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Contexts/global";
import { types } from "../../Contexts/globalReducer";
import MenuRutas from "../MenuRutas/MenuRutas";

const Rutas = ({ profiles, columns }) => {
    const [state, dispatch] = useContext(GlobalContext);
    let { rutaSeleccionada, idSelected, rutaActual} = state;

    let routeProfiles = [];
    rutaSeleccionada.map((element) => {
        const perfil = profiles.find((perfil) => perfil.id == element);
        if (perfil) {
            let item = {
                column: perfil.column,
                id: perfil.id,
                name: perfil.name
            };
            routeProfiles.push(item)
        }

    });
    const [newC, setNewC] = useState(false);
    const [options, setOptions] = useState(profiles?.filter((profile) => profile.column == 1));
    var valores = {
        nivel: options[0]?.column,
        perfil: options[0]
    };
    const handleAdd = (e) => {
        if (profiles.filter((profile) => profile.column == e)[0]) {
            valores = {
                perfil: profiles.filter((profile) => profile.column == e)[0],
                nivel: Number(e)
            };
            const profilesOptions = profiles.filter((profile) => profile.column == e);
            setOptions(profilesOptions);
        } else {
            setOptions([])
        }

    }

    const handleSave = (e) => {
        const perfil = profiles.find((perfil) => perfil.id == idSelected);
        perfil.routes[rutaActual].push(valores.perfil.id);
        setNewC(false);
        setOptions(profiles.filter((profile) => profile.column == 1));

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
            
        dispatch({ type: types.updateProfiles, payload: {profiles} });
    }

    const handleDelete = (id) => {
        var eliminarRuta = false;
        const perfil = profiles.find((perfil) => perfil.id == idSelected);
        const index = perfil.routes[rutaActual].findIndex((element) => element === id);
        perfil.routes[rutaActual].splice(index, 1);
        var ruta = perfil.routes[rutaActual];
        var indexRuta = rutaActual; 
        if(perfil.routes[rutaActual].length === 0 && perfil.routes.length>1){
            perfil.routes.splice(rutaActual,1);
            eliminarRuta = true;
            if(rutaActual === 0){
                indexRuta = 0;
                ruta = perfil.routes[rutaActual];
            }else{
                ruta = perfil.routes[rutaActual-1];
                indexRuta = rutaActual-1;
            }
        }
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
        dispatch({ type: types.updateProfiles, payload: {profiles, eliminarRuta, ruta, indexRuta} });
    }

    return (
        <>
            <hr></hr>
            <section>
                <MenuRutas ruta={rutaActual} profiles={profiles}/>
                <div id="ruta-1">
                    {routeProfiles.map((profile, index) => (
                        <div style={{ width: "100%", display: "flex", gap: "1px", margin: "1px" }} key={"route" + index}>
                            <div style={{ width: "25%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {columns.find((column) => column.id == profile.column).name}
                            </div>
                            <div style={{ width: "75%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {profile.name}
                                <button onClick={(e) => handleDelete(profile.id)} style={{ backgroundColor: "transparent", color: "rgb(220, 53, 69)", border: "none" }}>X</button>
                            </div>
                        </div>
                    ))}
                </div>
                {newC && <p style={{ color: "white" }}>Seleccione el nivel y perfil</p>}
                {newC && <div style={{ width: "100%", display: "flex", margin: "1px", marginTop: "2vh" }}>

                    <div style={{ width: "25%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <select onChange={(e) => handleAdd(e.target.value)} style={{ width: "100%", height: "100%" }}>
                            {
                                columns.map((column, index) => (
                                    <option key={"opt" + index} value={column.id}>{column.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div style={{ width: "75%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <select id="select-dinamico" style={{ width: "100%", height: "100%" }} onChange={(e) => {
                            valores = {
                                ...valores,
                                perfil: profiles.find((perfil) => perfil.id == e.target.value)
                            }
                        }}>
                            {options?.map((option) => (
                                <option key={option?.id} value={option?.id}>
                                    {option?.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>}

                {newC && options.length > 0 && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "#007bff", color: "white", padding: "10px", marginTop: "2vh" }} onClick={handleSave}>Guardar</button>}
                {!newC && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "#007bff", color: "white", padding: "10px", marginTop: "2vh" }} onClick={() => { setNewC(!newC) }}>Relacionar otro perfil</button>}
            </section>
        </>
    )
}

export default Rutas;