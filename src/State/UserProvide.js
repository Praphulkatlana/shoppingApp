import React,{useReducer} from 'react'
import { InitialState } from './InitialState'
import { reducer } from './Reducer'
import userContext from './UserContext'

const UserProvide = ({children}) => {

const [state,dispatch]=useReducer(reducer,InitialState)

  return (
   <userContext.Provider value={{state,dispatch}}>
    {children}
   </userContext.Provider>
  )
}

export default UserProvide