const types = {
    profileSelect: 'profileSelect',
    changeRutaActual: 'change ruta Actual',
    resetProfileSelect: 'reset profile select',
    allProfiles: 'all profiles',
    allColumns: 'all columns',
    updateRutaSelect: 'update ruta select',
    paginaActual: 'pagina actual'
}

const initialState = {
    profiles: [],
    columns: [],
    profileSelect: null,
    routeSelect: [],
    rutaActual: null,
    paginaActual: null,
}

const GlobalReducer = (state, action) => {

    switch (action.type) {
        case types.paginaActual:
            return {
                ...state,
                paginaActual: action.payload
            }

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

        case types.profileSelect:
            return {
                ...state,
                profileSelect: action.payload,
                rutaActual: state.rutaActual ?? 0,
                routeSelect: action.payload.routes[state.rutaActual ?? 0],
            }
        case types.updateRutaSelect:
            return {
                ...state,
                routeSelect: action.payload,

            }

        case types.changeRutaActual:

            return {
                ...state,
                rutaActual: action.payload,

            }
        case types.resetProfileSelect:

            return {
                ...state,
                profileSelect: null,
                rutaActual:null,
            }

        default:
            return state
    }
}

export { initialState, types }
export default GlobalReducer