import React from 'react'
import Contexto from './Context'
import { datos } from '../data/data'

const Provider = ({children}) => {

     

  return (
    <>
     <Contexto.Provider v>
        {children}    
    </Contexto.Provider> 
    </>
  )
}

export default Provider
