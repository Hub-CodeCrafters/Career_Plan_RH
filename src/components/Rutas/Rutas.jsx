import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../state/global";
import data from "../../data/data";

const Rutas = () => {
    const [state, dispatch] = useContext(GlobalContext)
    let { rutas, rutaSeleccionada, rutaActual } = state;
    let routeProfiles = [];
    rutaSeleccionada.map((element) => {
        const index = data.findIndex((column) => column.find((perfil) => perfil.id == element));
        const perfil = data[index].find((perfil) => perfil.id == element);
        let item = {
            column: index,
            id: perfil.id,
            name: perfil.name
        };
        routeProfiles.push(item)
    });
    const [newC, setNewC] = useState(false);
    const [guardar, setGuardar] = useState(false);
    const [options, setOptions] = useState(data[0]);
    const [valores, setValores] = useState({
        nivel: data[0][0].column,
        perfil: data[0][0].name
    });
    const handleAdd = (e) => {
        setValores({
            ...valores,
            nivel: Number(e)
        });
        const profiles = data[e-1];
        setOptions(profiles);
    }
    return (
        <>
            <section>

                <div id="ruta-1">
                    {routeProfiles.map((profile, index) => (
                        <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }} key={"route" + index}>
                            <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {profile.column}
                            </div>
                            <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {profile.name}
                            </div>
                        </div>
                    ))}
                </div>

                {newC && <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                    <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <label>Elija el nivel</label>
                        <select onChange={(e) => handleAdd(e.target.value)}>
                            {
                                [1,2,3,4,5,6,7,8,9,10,11,12].map((nivel) => (
                                    <option>{nivel}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <select id="select-dinamico" style={{ width: "100%" }} onChange={(e) => {
                            setValores({
                                ...valores,
                                perfil: e.target.value
                            })
                        }}>
                            {options?.map((option) => (
                                <option key={option.id} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>}
                {guardar && <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                    <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                        {valores?.nivel}
                    </div>
                    <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {valores?.perfil}
                    </div>

                </div>}
                {newC && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={() => {
                    setNewC(false)
                    setGuardar(true)
                }}>Guardar</button>}
                {!newC && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={() => { setNewC(!newC) }}>Agregar otro perfil</button>}
            </section>
        </>
    )
}

export default Rutas;