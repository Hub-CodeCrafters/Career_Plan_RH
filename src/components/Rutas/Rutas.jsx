import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../state/global";
import { types } from "../../state/globalReducer";

const Rutas = ({ profiles, columns }) => {
    const [state, dispatch] = useContext(GlobalContext)
    let { rutaSeleccionada, idSelected } = state;
    console.log(rutaSeleccionada, idSelected)
    let routeProfiles = [];
    rutaSeleccionada.map((element) => {
        const perfil = profiles.find((perfil) => perfil.id == element);
        let item = {
            column: perfil.column,
            id: perfil.id,
            name: perfil.name
        };
        routeProfiles.push(item)
    });
    const [newC, setNewC] = useState(false);
    const [options, setOptions] = useState(profiles.filter((profile) => profile.column == 1));
    var valores = {
        nivel: options[0].column,
        perfil: options[0]
    };
    const handleAdd = (e) => {
        valores = {
            perfil: profiles.filter((profile) => profile.column == e)[0],
            nivel: Number(e)
        };
        const profilesOptions = profiles.filter((profile) => profile.column == e);
        setOptions(profilesOptions);
    }

    const handleSave = (e) => {
        const perfil = profiles.find((perfil) => perfil.id == idSelected);
        perfil.routes[0].push(valores.perfil.id);
        setNewC(false);
        setOptions(profiles.filter((profile) => profile.column == 1));
        fetch('http://localhost:3000/profiles/' + idSelected, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfil)
        }).then(response => response.json())
            .then(newPerson => console.log(newPerson));
        dispatch({ type: types.updateProfiles, payload: profiles });
    }

    const handleDelete = (id) => {
        console.log(id)
        const perfil = profiles.find((perfil) => perfil.id == idSelected);
        const index = perfil.routes[0].findIndex((element) => element === id);
        console.log(index)
        perfil.routes[0].splice(index, 1);
        fetch('http://localhost:3000/profiles/' + idSelected, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfil)
        }).then(response => response.json())
            .then(newPerson => console.log(newPerson));
        dispatch({ type: types.updateProfiles, payload: profiles });
    }

    return (
        <>
            <section>
                <div id="ruta-1">
                    {routeProfiles.map((profile, index) => (
                        <div style={{ width: "100%", display: "flex", gap: "1px", margin: "1px" }} key={"route" + index}>
                            <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {columns.find((column) => column.id == profile.column).name}
                            </div>
                            <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {profile.name}
                                <button onClick={(e) => handleDelete(profile.id)}>X</button>
                            </div>
                        </div>
                    ))}
                </div>
                {newC && <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                    <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <label>Elija el nivel</label>
                        <select onChange={(e) => handleAdd(e.target.value)}>
                            {
                                columns.map((column, index) => (
                                    <option key={"opt" + index} value={column.id}>{column.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <select id="select-dinamico" style={{ width: "100%" }} onChange={(e) => {
                            valores = {
                                ...valores,
                                perfil: profiles.find((perfil) => perfil.id == e.target.value)
                            }
                        }}>
                            {options?.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>}
                {newC && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={handleSave}>Guardar</button>}
                {!newC && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={() => { setNewC(!newC) }}>Agregar otro perfil</button>}
            </section>
        </>
    )
}

export default Rutas;