const types = {
    profileSelect: 'profileSelect',
    changeRutas: 'change rutas',
    resetState: 'reset state',
    updateProfiles: 'update profiles',
    allProfiles: 'all profiles',
    allColumns: 'all columns',
    updateRutaSelect: 'update ruta select'
}

const initialState = {
    profiles: [],
    columns: [],
    profileSelect: null,
    routeSelect: [],
    rutaActual: 0,
    // // esto no creo necesario ya que es lo que esta con cada perfil podemos consultar cada perfil  y obtenemos esta infomacion solo con  idSelected
    // perfil: "",
    // rutas: [],
    // rutaSeleccionada: [],
    // estudios: [],
    // experiencia: [],
    // habilidades: [],
    // competencias: [],

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

        case types.profileSelect:
            return {
                ...state,
                profileSelect: action.payload,
                routeSelect: action.payload.routes[0],
                rutaActual: 0,
                // por el momento solo  actualizamos el id ya que la otra informacion esta en el esatdo con los perfiles no veo necesario  guardar esto cuando ya esta en el estado
                // rutas: action.payload.rutasPerfil,
             
                // rutaSeleccionada: action.payload.rutasPerfil[0],
                // estudios: action.payload.estudios,
                // experiencia: action.payload.experiencia,
                // habilidades: action.payload.habilidades,
                // competencias: action.payload.competencias,
                // perfil: action.payload.perfilName
            }
        case types.updateRutaSelect:   
            return {
                ...state,
                routeSelect: action.payload
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
                profileSelect: action.payload,
                // esto lo lo creo necesario por el momento
                // perfil: "",
                // rutas: [],
                // rutaSeleccionada: [],
                // rutaActual: 0,
                // profiles: action.payload,
                // ...initialState
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