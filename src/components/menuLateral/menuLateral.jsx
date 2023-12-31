import { useContext, useState } from "react"
import { useActivate } from "../../hooks/useActivateCard"
import Rutas from "../Rutas/Rutas"
import { GlobalContext } from "../../state/global"
import { types } from "../../state/globalReducer"

const MenuLateral = ({ perfiles, columns }) => {
    const [state, dispatch] = useContext(GlobalContext);
    let { idSelected, rutas, perfil, rutaSeleccionada } = state;
    let [page, setPage] = useState(1);
    var valores = {
        nivel: 1,
        perfil: ''
    };

    const addProfile = (e) => {
        const ids = perfiles.map((profile) => profile.id);
        const max = Math.max(...ids);
        e.preventDefault();
        perfil = {
            id: max + 1,
            column: +valores.nivel,
            name: valores.perfil,
            routes: [[]],
            estudios: [],
            experiencia: [],
            habilidades: [],
            competencias: [],
        }
        perfiles.push(perfil);
        var data = perfiles.filter((perfil) => perfil.column === +valores.nivel);

        document.getElementById("myForm").reset();
        fetch('http://localhost:3000/profiles/' + valores.nivel, {
            mode: "cors",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: valores.nivel,
                data: data
            })
        }).then(response => response.json())
            .then(newPerson => console.log(newPerson));
        valores.nivel = 1;
        valores.perfil = '';
        dispatch({ type: types.resetState, payload: perfiles });
    }

    const handleDelete = () => {
        const profile = perfiles.find((profile) => profile.id === idSelected)
        const index = perfiles.findIndex((profile) => profile.id === idSelected);
        perfiles.splice(index, 1);

        var data = perfiles.filter((perfil) => perfil.column === profile.column);
        fetch('http://localhost:3000/profiles/' + profile.column, {
            mode: "cors",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: profile.column,
                data: data
            })
        }).then(response => response.json())
            .then(newPerson => console.log(newPerson));
        dispatch({ type: types.resetState, payload: state.profiles });
        dispatch({ type: types.updateProfiles, payload: perfiles });
    }

    return (
        <div style={{ height: '100vh' }}>
            {idSelected != 0 && <center>
                <h1 style={{ color: "white", margin: "3vh 0 " }}>{perfil}</h1>
                <button onClick={(e) => handleDelete()} style={{backgroundColor:"#dc3545", color:"white", padding:"10px", width:"auto", marginBottom:"5vh"}}>Eliminar este perfil</button>
                <Rutas profiles={perfiles} columns={columns} />
            </center>}
            {idSelected == 0 && <center style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <form id="myForm">
                    <h1 style={{ color: "white", margin: "5vh 0 " }}>Agregar perfil</h1>
                    <p style={{color:"white"}}>Seleccione el nivel y digite el nombre del perfil añadir.</p>
                    <div style={{ width: "100%", display: "flex", margin: "1px" }}>

                        <div style={{ width: "25%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <select style={{width:"100%", height:"100%"}} onChange={(e) => {
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
                        <div style={{ width: "75%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <input type="text" id="name" name="name" style={{ width: '100%', height:"100%"}} onChange={(e) => {
                                valores.perfil = e.target.value;
                            }} />
                        </div>

                    </div>
                    <button style={{  width: "auto", borderRadius: "5px", backgroundColor: "#007bff", color: "white", padding: "10px",marginTop:"2vh" }} onClick={addProfile}>Agregar perfil</button>
                </form>
            </center>}

        </div>

    )
}
export default MenuLateral