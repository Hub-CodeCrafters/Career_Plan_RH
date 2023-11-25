import { useContext, useState } from "react"
import { useActivate } from "../../hooks/useActivateCard"
import Rutas from "../Rutas/Rutas"
import { GlobalContext } from "../../state/global"
import { types } from "../../state/globalReducer"
const MenuLateral = ({ perfiles,columns }) => {
    const [state, dispatch] = useContext(GlobalContext);
    let { idSelected, rutas, perfil, rutaSeleccionada } = state;
    let [page, setPage] = useState(1);
    var valores = {
        nivel: 1,
        perfil: ''
    };

    const save = (event) => {
        event.preventDefault();
        const profilesIdsArray = perfiles.map((profile) => profile.id);
        profilesIdsArray.forEach((id) => {
            fetch('http://localhost:3000/profiles/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json())
                .then(newPerson => console.log(newPerson));
        });
        perfiles.forEach((perfil) => {
            fetch('http://localhost:3000/profiles/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(perfil)
            }).then(response => response.json())
                .then(newPerson => console.log(newPerson));
        });
    }


    const addProfile = (e) => {
        e.preventDefault();
        perfil = {
            id: perfiles[perfiles.length - 1].id + 1,
            column: +valores.nivel,
            name: valores.perfil,
            routes: [[]],
            estudios: [],
            experiencia: [],
            habilidades: [],
            competencias: [],
        }
        perfiles.push(perfil);
        valores.nivel = 1;
        valores.perfil = '';
        document.getElementById("myForm").reset();
        fetch('http://localhost:3000/profiles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(perfil)
        }).then(response => response.json())
            .then(newPerson => console.log(newPerson));
        dispatch({ type: types.resetState, payload: perfiles });
    }

    const handleDelete = () => {
        const index = perfiles.findIndex((profile) => profile.id === idSelected);
        perfiles.splice(index, 1);
        fetch('http://localhost:3000/profiles/' + idSelected, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(newPerson => console.log(newPerson));
        dispatch({ type: types.resetState, payload: state.profiles });
        dispatch({ type: types.updateProfiles, payload: perfiles });
    }

    console.log(idSelected)
    return (
        // <aside>
        //    {profileActive &&  <nav style={{ width: "100%" }}>
        //    <h4 style={{color:"white"}}>{profileActive.name}</h4>
        //         <ul style={{ listStyle: "none", display: "flex", flexDirection: "row", backgroundColor: "gray", justifyContent:"flex-start", padding:"0", cursor:"pointer" }}>
        //             <li className={`${activate ? 'seleccionado' : ""}`} style={{ borderRight: "1px solid white", padding: "5px", width: "100%" }} onClick={handleActivate}>Rutas</li>

        //         </ul>
        //     </nav>}
        //     {activate && profileActive && <Rutas routes={profileActive.routes}></Rutas>}

        // </aside>
        <div style={{ height: '100vh' }}>
            {idSelected != 0 && <center>
                <h1 style={{ color: "white", margin: "5vh 0 " }}>{perfil}</h1>
                <button onClick={(e) => handleDelete()}>X</button>
                <Rutas profiles={perfiles} columns={columns}/>
            </center>}
            {idSelected == 0 && <center style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <form id="myForm">
                    <h1 style={{ color: "white", margin: "5vh 0 " }}>Agregar perfil</h1>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <label>Elija el nivel</label>
                            <select onChange={(e) => {
                                valores.nivel = e.target.value;
                            }
                            }>
                                {
                                    columns.map((column, index) => (
                                        <option key={"opt" + index} value={column.id}>{column.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <input type="text" id="name" name="name" style={{ width: 'inherit' }} onChange={(e) => {
                                valores.perfil = e.target.value;
                            }} />
                        </div>

                    </div>
                    <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={addProfile}>Agregar perfil</button>
                </form>
                <button className='botton' onClick={save} style={{ position: "relative", bottom: 5, width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }}>Guardar cambios</button>
            </center>}

        </div>

    )
}
export default MenuLateral