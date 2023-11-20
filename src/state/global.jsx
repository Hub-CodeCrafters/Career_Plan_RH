
import {  createContext, useReducer } from 'react'
import GlobalReducer, { initialState } from './globalReducer'

const GlobalContext = createContext()

const GlobalProvider = ({children}) =>{

  const [state, dispatch] = useReducer( GlobalReducer, initialState)
  return(
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}
export  {GlobalContext}
export default GlobalProvider