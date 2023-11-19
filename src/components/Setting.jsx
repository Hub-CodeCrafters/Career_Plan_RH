import React, { useEffect, useState } from 'react';


import "../assets/setting.css"

function Setting({profileActive}){

return(
    <div className="setting">
        <div className='profileSelected' > 
            <h4 className='title'>Perfil seleccionado</h4>
            <h4 className='slected'>{profileActive}</h4>

        </div>
    </div>
)



}


export default Setting;