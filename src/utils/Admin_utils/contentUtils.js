import { updateProfilesColumn } from "../../services/profileServices";
import { getToken } from "../generalUtils/tokenUtils";


const getProfilesByColumnId = (columnId, profiles) => {
    const profilesForColumn = profiles.filter((profile) => profile.column === columnId) || [];
    return profilesForColumn;
}

const changeProfilePositionInColumn =  (event, profiles, dispatch, types) => {

    const { active, over } = event;
    const isPerfilActivoType = active?.data?.current?.type || null;
    const isPerfilSobreType = over?.data?.current?.type || null;
    const columnaProfileActivo = active?.data?.current?.profileColumn || null;
    const columnaProfileSobre = over?.data?.current?.profileColumn || null;

    if (
        active &&
        over &&
        isPerfilActivoType === "perfil" &&
        isPerfilSobreType === "perfil" 
    ) {
        try {
            const profileId = active.id;
            const destinationProfileId = over.id;

            const updatedProfiles = JSON.parse(JSON.stringify(profiles));

            const ProfileIndex = updatedProfiles.findIndex(
                (profile) => profile.id === profileId
            );
            const destinationProfileIndex = updatedProfiles.findIndex(
                (profile) => profile.id === destinationProfileId
            );

            let movedProfile = updatedProfiles.splice(ProfileIndex, 1)[0];
            movedProfile.column = columnaProfileSobre;
            updatedProfiles.splice(destinationProfileIndex, 0, movedProfile);

            dispatch({ type: types.allProfiles, payload: updatedProfiles });
            // return updatedProfiles;

        } catch (error) {
            console.error("Error:", error);

        }
    }
};

const moveProfileToColumn = async (event, profiles, dispatch, types) => {
    const { active, over } = event;
    const isPerfilActivoType = active?.data?.current?.type || null;
    const isPerfilSobreType = over?.data?.current?.type || null;
    const columnaProfileActivo = active?.data?.current?.profileColumn || null;
    const destinationColumnId = over?.id || null;

    const list = {
        A1: "A1",
        A2: "A2",
        A3: "A3",
        B1: "B1",
        B2: "B2",
        B3: "B3",
        C1: "C1",
        C2: "C2",
        C3: "C3",
        D1: "D1",
        D2: "D2",
        D3: "D3",
    }

    if (isPerfilActivoType == "perfil" && isPerfilSobreType == "column" && list.hasOwnProperty(destinationColumnId)) {
         console.log("entro al if")
        try {
            const updatedProfiles = JSON.parse(JSON.stringify(profiles));
            const profileId = active.id;
            const columnaDestinoId = over.data.current.idColumn;
            const ProfileIndex = updatedProfiles.findIndex((profile) => profile.id === profileId);
            let [movedProfile] = updatedProfiles.splice(ProfileIndex, 1);
            movedProfile.column = columnaDestinoId;
            updatedProfiles.push(movedProfile);

            dispatch({ type: types.allProfiles, payload: updatedProfiles });
        } catch (error) {
            console.error("Error:", error);

        }
    }
};

export {
    getProfilesByColumnId,
    changeProfilePositionInColumn,
    moveProfileToColumn
}


