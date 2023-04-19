import React, { useState } from 'react'
import Contexto from './Context'
import { datos } from '../data/data'

// const misDatos = [];

const Provider = ({children}) => {

     const [etapas,setEtapas] = useState(0);
     const [misDatos, setMisDatos] = useState([]);

  return (
    
     <Contexto.Provider value={{
      etapas,
      setEtapas,
      misDatos,
      setMisDatos
     }}>
        {children}    
    </Contexto.Provider> 
    
  )
}

export default Provider
