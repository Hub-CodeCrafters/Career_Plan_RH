import { useState, useContext } from 'react';
import { GlobalContext } from '../../state/global';
import { types } from '../../state/globalReducer';
const RequisitosUser = () => {
    const [state, dispatch] = useContext(GlobalContext)
    let { idSelected, estudios, experiencia, habilidades, competencias } = state
    return (
        <>
            {idSelected != 0 && estudios != null && <div >
                <hr></hr>
                <h3 style={{ color: "white" }}>Estudios</h3>

                {estudios?.map((item, i) => {
                    return (

                        <div style={{ display: "flex", flexDirection: "row", border: "0.2px solid black", width: "100%", justifyContent: "center" }}>
                            <div style={{ width: "40%", backgroundColor: "green", padding: "4px", color: "white" }}>{item.tipo}</div>
                            <div style={{ width: "40%", backgroundColor: "white", padding: "4px" }}>{item.calidad} </div>
                        </div>
                    )
                })}

                <br />
                <hr></hr>
                <h3 style={{ color: "white" }}>Experiencia</h3>
                {experiencia?.map((item, i) => {
                    return (

                        <div style={{ display: "flex", flexDirection: "row", border: "0.2px solid black", width: "100%", justifyContent: "center" }}>
                            <div style={{ width: "50%", backgroundColor: "red", padding: "4px", color: "white" }}>{item.tipo}</div>
                            <div style={{ width: "30%", backgroundColor: "white", padding: "4px" }}>{item.años} años</div>
                        </div>
                    )
                })}
                {experiencia == null && <div style={{ width: "100%", margin: "4px", color: "white" }}>No necesita experiencia</div>}
                <br />
                <hr></hr>

                <h3 style={{ color: "white" }}>Habilidades</h3>
                <ul style={{ paddingLeft: "0" }}>
                    {habilidades?.map((item, i) => {
                        return (
                            <li style={{ fontSize: "14px", color: "white", listStyle: "none", marginBottom: "2px" }}>{item}</li>
                        )
                    })}

                </ul>
                <br></br>
                <hr></hr>
                <h3 style={{ color: "white" }}>Competencias</h3>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    {competencias?.map((item) => {
                        return (
                            <div style={{ width: "50%" }}>
                                <div class="hexagon" >
                                    <span class="hexagono-content">
                                        <strong>{item}</strong>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>




            </div>}
        </>
    )
}

export default RequisitosUser