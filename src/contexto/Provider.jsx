import React, { useState } from 'react'
import Contexto from './Context'
import { datos } from '../data/data'

// const misDatos = [];

const Provider = ({children}) => {

     const [etapas,setEtapas] = useState(0);
     const [misDatos, setMisDatos] = useState([]);
     const [addDatos, setAddDatos] = useState([]);
     const [nombre, setNombre] = useState("");
     const [habitacion, setHabitacion] = useState("");
     const [personas, setPersonas] = useState("");
     const [dias, setDias] = useState("");

  return (
    
     <Contexto.Provider value={{
      etapas,
      setEtapas,
      misDatos,
      setMisDatos,
      addDatos,
      setAddDatos,
      nombre,
      setNombre,
      habitacion,
      setHabitacion,
      personas,
      setPersonas,
      dias,
      setDias
     }}>
        {children}    
    </Contexto.Provider> 
    
  )
}

export default Provider
