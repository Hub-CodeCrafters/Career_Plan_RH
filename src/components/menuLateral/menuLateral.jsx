import { useActivate } from "../../hooks/useActivateCard"
import Rutas from "../Rutas/Rutas"
const MenuLateral = (profileActive) => {
    const { activate, handleActivate } = useActivate()
    console.log(profileActive)
    return (

        <aside>
           {profileActive?.profileActive != "" &&  <nav style={{ width: "100%" }}>
           <h4 style={{color:"white"}}>{profileActive?.profileActive}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "row", backgroundColor: "gray", justifyContent:"flex-start", padding:"0", cursor:"pointer" }}>
                    <li className={`${activate ? 'seleccionado' : ""}`} style={{ borderRight: "1px solid white", padding: "5px", width: "100%" }} onClick={handleActivate}>Rutas</li>

                </ul>
            </nav>}
            {activate && profileActive?.profileActive != ""  && <Rutas></Rutas>}

        </aside>

    )
}
export default MenuLateral