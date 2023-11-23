import { useEffect, useState } from "react";

const Rutas = () => {
    const [ruta, setRuta] = useState(0)
    const [newC, setNewC] = useState(false)
    const [options, setOptions] = useState([{ value: 191, label: 'Gerente de Cuenta Clave' },
    { value: 192, label: 'Gerente De Producto' },
    { value: 193, label: 'Ingeniero De Desarrollo Experto' },
    { value: 194, label: 'Gerente Exito Del Cliente' },
    { value: 195, label: 'Gerente De Operaciones' }])
    const [valores, setValores] = useState({
        nivel: 9,
        perfil: "Gerente de Cuenta Clave"
    })
    const [guardar, setGuardar] = useState(false)
    const handleAdd = (e) => {
        setValores({
            ...valores,
            nivel: Number(e)
        })
        if (e == "9") {
            setOptions([{ value: 191, label: 'Gerente de Cuenta Clave' },
            { value: 192, label: 'Gerente De Producto' },
            { value: 193, label: 'Ingeniero De Desarrollo Experto' },
            { value: 194, label: 'Gerente Exito Del Cliente' },
            { value: 195, label: 'Gerente De Operaciones' }])
        } else if (e == "10") {
            setOptions([
                { value: 196, label: 'Gerente De Sector' },
                { value: 197, label: 'Gerente Parthers' },
                { value: 198, label: 'Gerente De Propuesta' },
                { value: 199, label: 'Gerente De Eventos Y Contenido' },
                { value: 200, label: 'Gerente De Proyectos' },
                { value: 201, label: 'Gente de Soporte Site-Manger' },
                { value: 202, label: 'Gerente De Datos' },
                { value: 203, label: 'Gerente De Tegnología' },
                { value: 204, label: 'Gerente De Servicios Profesionales' },
                { value: 205, label: 'Technical Advisor' },
                { value: 206, label: 'Gerente Funcional De Exito' },
                { value: 207, label: 'Gerente De Nuevos Mercados' },
                { value: 208, label: 'Gerente Funcional De Expasión' },
                { value: 209, label: 'Gerente Habitación de Ventas' },
                { value: 210, label: 'Gerente De Adopción' },
            ])
        } else if (e == "11") {
            setOptions([
                { value: 211, label: 'Director De Operaciones' },
                { value: 212, label: 'Director De Adopción' },
                { value: 213, label: 'Arquictecto De Soluciones' },
                { value: 214, label: 'Director IT' },
                { value: 215, label: 'Director Juridico' },
            ])
        } else if (e == "12") {
            setOptions([
                { value: 216, label: 'Gerente General' },
                { value: 217, label: 'Gerente General (Ecuador Y Panama)' },
                { value: 218, label: 'Director De Ventas Y Mercadeo' },
                { value: 219, label: 'Director De Ventas' },
                { value: 220, label: 'Director Nuevos Negocios' },
                { value: 221, label: 'Director Exito' },
                { value: 222, label: 'Director Gestionn Humana' },
                { value: 223, label: 'Director De Parthers' },
            ])
        }
    }
    return (
        <>
            <nav style={{ width: "100%" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "row", backgroundColor: "gray", justifyContent: "flex-start", padding: "0", cursor: "pointer" }}>
                    <li className={`${ruta == 1 ? 'seleccionado' : ""}`} style={{ borderRight: "1px solid white", padding: "5px", width: "50%" }} onClick={() => { setRuta(1) }}>Ruta 1</li>
                    <li className={`${ruta == 2 ? 'seleccionado' : ""}`} style={{ borderRight: "1px solid white", padding: "5px", width: "50%" }} onClick={() => { setRuta(2) }}>Ruta 2</li>
                </ul>
            </nav>
            <section>
                {ruta == 1 && <div id="ruta-1">
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            4
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Ing. Mercadeo Técnico
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                            5
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Coor. Semillero
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            7
                        </div >
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Líder semillero
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            8
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Ing. de Solución
                        </div>
                    </div>

                    <br></br>
                    {newC && <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <label>Elija el nivel</label>
                            <select onChange={(e) => handleAdd(e.target.value)}>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
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
                                    <option key={option.value} value={option.label}>
                                        {option.label}
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
                    <br></br>
                </div>}
                {ruta == 1 && !newC && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={() => { setNewC(!newC) }}>Agregar otro perfil</button>}
                {ruta == 2 && <div id="ruta-1">
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            4
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Ing. Mercadeo Técnico
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                            7
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Líder Espedialista SIG
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            8
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Ing. de solución
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{ width: "100%", display: "flex", gap: "1vw", margin: "1px" }}>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            10
                        </div>
                        <div style={{ width: "50%", backgroundColor: "white", minHeight: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            Technical Advisor
                        </div>
                    </div>
                    <br />
                </div>}
                {ruta == 2 && <button style={{ width: "auto", borderRadius: "5px", backgroundColor: "skyblue", color: "white", padding: "10px" }} onClick={() => { handleAdd(2) }}>Agregar otro perfil</button>}

            </section>
        </>
    )
}

export default Rutas;