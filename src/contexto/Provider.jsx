import React, { useState } from 'react'
import Contexto from './Context'
import { datos } from '../data/data'

const misDatos = [];

const Provider = ({children}) => {

     const [etapas,setEtapas] = useState(0);

  return (
    <>
     <Contexto.Provider value={{
      etapas,
      setEtapas,
      misDatos
     }}>
        {children}    
    </Contexto.Provider> 
    </>
  )
}

export default Provider
