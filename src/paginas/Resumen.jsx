import React, { useContext } from 'react'
import { datos } from '../data/data'
import Contexto from '../contexto/Context'
import Formzona from './Formzona'

const Resumen = () => {
  const {misDatos,addDatos} = useContext(Contexto);
  const {nombre,habitacion,personas,dias} = useContext(Contexto);
  return (
    <>
      {misDatos.map((dato,index)=>
        <div key={index}>
          <h3>Resumen:</h3>
          <img src={dato.imagen} alt="a" />
          <div className='content'>
          <p className='pru'>Zona: {dato.lugar}</p>
          <p>$ por dia: {dato.precio}</p>
          <div>
          {nombre && <p>Nombre: {nombre}</p>}
          {habitacion && <p>Habitacion: {habitacion}</p>}
          {personas && <p>Personas: {personas}</p>}
          {dias && <p>Dias: {dias}</p>}
          {dias && <p>Cantidad a pagar: {dato.precio * dias}$</p>}
        </div>
          </div>
        
        
      </div>
      )
        }

      
        
      
    </>
  )
}

export default Resumen
