const types = {
    changeId: 'change id',
    changeRutas: 'change rutas',
    resetState: 'reset state',
    updateProfiles: 'update profiles',
    allProfiles: 'all profiles',
    allColumns: 'all columns',
}

const initialState = {
    profiles: [],
    idSelected: 0,
    perfil: "",
    rutas: [],
    rutaSeleccionada: [],
    rutaActual: 0,
    estudios: [],
    experiencia: [],
    habilidades: [],
    competencias: [],
    columns: [],
}

const GlobalReducer = (state, action) => {

    switch (action.type) {

        case types.allProfiles:

        return {
            // investiagr por que  se hace una copia de una rray al estado y no se hace directamente
            ...state,
            profiles: action.payload
        }
        case types.allColumns:
            
        return {
               // investiagr por que  se hace una copia de una rray al estado y no se hace directamente
            ...state,
            columns: action.payload
        }

        case types.changeId:
            return {
                ...state,
                idSelected: action.payload.perfilId,
                rutas: action.payload.rutasPerfil,
                rutaActual: 0,
                rutaSeleccionada: action.payload.rutasPerfil[0],
                estudios: action.payload.estudios,
                experiencia: action.payload.experiencia,
                habilidades: action.payload.habilidades,
                competencias: action.payload.competencias,
                perfil: action.payload.perfilName
            }
        case types.changeRutas:
            return {
                ...state,
                rutaSeleccionada: state.rutas[action.payload],
                rutaActual: action.payload
            }
        case types.resetState:
            return {
                profiles: action.payload,
                idSelected: 0,
                perfil: "",
                rutas: [],
                rutaSeleccionada: [],
                rutaActual: 0,
                ...initialState
            }
        case types.updateProfiles:
            if(action.payload.eliminarRuta){
                return {
                    ...state,
                    rutaSeleccionada: action.payload.ruta,
                    rutaActual: action.payload.indexRuta,
                    profiles: action.payload.profiles
                }
            }else if(action.payload.nuevoIndex){
                return {
                    ...state,
                    rutas: action.payload.nuevasRutas,
                    rutaSeleccionada: action.payload.rutaSeleccionada,
                    rutaActual: action.payload.nuevoIndex,
                    profiles: action.payload.profiles
                }
            }else{
                return {
                    ...state,
                    profiles: action.payload.profiles
                }
            }
        default:
            return state
    }
}

export { initialState, types }
export default GlobalReducer