import { useContext, useState } from "react"
import { useActivate } from "../../hooks/useActivateCard"
import Rutas from "../Rutas/Rutas"
import { GlobalContext } from "../../state/global"
import { types } from "../../state/globalReducer"
const MenuLateral = ({ perfiles }) => {
    const [state, dispatch] = useContext(GlobalContext)
    let { idSelected, rutas, perfil, rutaSeleccionada } = state

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

    // fetch('http://localhost:3000/profiles', {
    //             method: '',
    //             headers: {
    //                'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                'ID': 2,
    //                'Name': 'John',
    //                'lastName': 'Doe'
    //             })
    //         }).then(response => response.json())
    //         .then(newPerson => console.log(newPerson));

    const { activate, handleActivate } = useActivate()

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
        <div >
            {idSelected != 0 && <center>
                <h1 style={{ color: "white", margin: "5vh 0 " }}>{perfil}</h1>
                <button className='botton' onClick={changeRuta}>Mostrar otra ruta</button>
                <span style={{ color: "white", marginLeft: "7px" }}>{page} ruta  de {rutas.length}</span>
                <Rutas />
                <button className='botton' onClick={save} style={{ position: "absolute", bottom: 0 }}>Guardar cambios</button>
            </center>}

        </div>

    )
}
export default MenuLateral