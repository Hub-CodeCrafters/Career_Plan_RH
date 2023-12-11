import { useEffect, useState } from "react";

function Lines({idSelected,rutaSeleccionada, currentProfiles}) {
    var [page, setPage] = useState(currentProfiles)
    useEffect(() => { setPage(currentProfiles)}, [currentProfiles] )
    var seleccionado;
    const perfiles = [];
    const lines = [];
    var object;
    if(rutaSeleccionada){
        rutaSeleccionada.forEach(element => {
            object = document.getElementById('perfil-' + element);
            if(object){
                perfiles.push(document.getElementById('perfil-' + element));
            }
        });
    
        if (idSelected > 0) {
            seleccionado = document.getElementById('perfil-' + idSelected);
        }
        
        for (let i = 0; i < perfiles.length; i++) {
            var posax = 0;
            var posay = 0;
            var width = 0;
            if (i == 0) {
                posax = seleccionado.offsetLeft;
                posay = seleccionado.offsetTop;
                width = seleccionado.offsetWidth;
            } else {
                posax = perfiles[i - 1].offsetLeft;
                posay = perfiles[i - 1].offsetTop;
                width = perfiles[i - 1].offsetWidth;
            }
    
    
            var posbx = perfiles[i].offsetLeft;
            var posby = perfiles[i].offsetTop;
    
            var centerx;
            var centery;
            var distance;
            var angle;
    
            //find center points;
            centerx = (posax + posbx) / 2;
            centery = (posay + posby) / 2;
    
            //angle 
            var angle = Math.atan2(posay - posby, posax - posbx) * 180 / Math.PI;
    
            if(angle<0){
                angle = 180+angle;
            }else if(angle>90){
                angle = (180-angle)*-1;
            }
            var radians = Math.abs(angle) * (Math.PI/180);
    
            //distance
            distance = Math.sqrt(Math.pow((posbx - posax), 2) + Math.pow((posby - posay), 2));
            
            var displacement = (distance/2) - (Math.cos(radians)*(distance/2));
            var style = {
                width: distance + "px",
                transform: " rotate(" + angle + "deg)",
                top: centery + 10 +  "px",
                left: posax - displacement + (width/2) +  "px",
                position: "absolute",
                backgroundColor: "green",
                height: "10px"
            }
            lines.push(style)
        }
    }
    
    return (<div style={{ backgroundColor: 'rgba(0,0,0,0)', width: "100vw", height: "100vh", position: "absolute", pointerEvents: 'none' }} tabIndex={-1}>
        {lines && lines.map((line, index) => (
            <div id='line' key={"line" + index} style={line}></div>
        ))}
    </div>)
}

export default Lines;



