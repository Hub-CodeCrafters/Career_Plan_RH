const addSelectedProfileToGlobalState= (profiles,profileId,dispatch,types) => {

    const selectedProfile = profiles.find((profile) => profile.id === profileId);

    if(selectedProfile){
        dispatch({
            type:types.profileSelect,
            payload: selectedProfile
        })
    }else{
        console.log("no se encontro el perfil")
    }

}

export {addSelectedProfileToGlobalState}