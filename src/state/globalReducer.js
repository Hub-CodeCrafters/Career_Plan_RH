const types = {
    changeId: 'change id',
    changeRutas: 'change rutas',
    resetState: 'reset state',
    updateProfiles: 'update profiles'
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
    competencias: []
}

const GlobalReducer = (state, action) => {
    switch (action.type) {
        case types.changeId:
            return {
                ...state,
                idSelected: action.payload.perfilId,
                rutas: action.payload.rutasPerfil,
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
            return {
                ...state,
                profiles: action.payload
            }
        default:
            return state
    }
}

export { initialState, types }
export default GlobalReducer