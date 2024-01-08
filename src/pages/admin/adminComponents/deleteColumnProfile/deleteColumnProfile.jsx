import { useContext, useState } from "react"
import { GlobalContext } from "../../../../Contexts/global"
import { types } from "../../../../Contexts/globalReducer"

import style from "./deleteColumnProfile.module.css"

import { updateProfilesColumn} from "../../../../services/profileServices"

const DeleteColumnProfile = ({ perfiles, columns }) => {

    const [state, dispatch] = useContext(GlobalContext);
    const { idSelected, perfil } = state;

    const handleDelete = () => {
        const profile = perfiles.find((profile) => profile.id === idSelected)
        const index = perfiles.findIndex((profile) => profile.id === idSelected);
        perfiles.splice(index, 1);

        var data = perfiles.filter((perfil) => perfil.column === profile.column);
       
        updateProfilesColumn(profile.column, data)
      
        dispatch({ type: types.resetState, payload: state.profiles });
        dispatch({ type: types.updateProfiles, payload: perfiles });
    }
    return (
        <div>
            <h3 className={style.selectProfile}>Perfil Selecionado </h3>
            <h3 className={style.nameProfile}>{perfil}</h3>
            <button className={style.buttonDelete} onClick={(e) => handleDelete()}>Eliminar este perfil</button>  
        </div>

    )
}
export default DeleteColumnProfile