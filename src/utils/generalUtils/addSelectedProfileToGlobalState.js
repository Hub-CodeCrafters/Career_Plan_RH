const addSelectedProfileToGlobalState= (profiles,profileId,dispatch,types) => {

    const selectedProfile = profiles.find((profile) => profile.id === profileId);
    console.log(selectedProfile)

    if(selectedProfile){
        dispatch({
            type:types.changeId,
            payload: selectedProfile
        })
    }else{
        console.log("no se encontro el perfil")
    }

}

export {addSelectedProfileToGlobalState}