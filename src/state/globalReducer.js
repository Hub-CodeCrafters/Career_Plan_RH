const types = {
    changeId: 'change id',
    changeRutas: 'change rutas',
    resetState: 'reset state'
}

const initialState = {
    idSelected: 0,
    rutas: [],
    rutaSeleccionada: [],
    rutaActual: 0
}

const GlobalReducer = (state, action) => {
    switch (action.type) {
        case types.changeId:
            return {
                ...state,
                idSelected: action.payload.perfilId,
                rutas: action.payload.rutasPerfil,
                rutaSeleccionada: action.payload.rutasPerfil[0],
            }
        case types.changeRutas:
        return {
            ...state,
            rutaSeleccionada: state.rutas[action.payload],
            rutaActual: action.payload
        }
        case types.resetState:
        return {
            ...state,
            ...initialState
        }
        default:
            return state
    }
}

export { initialState, types }
export default GlobalReducer