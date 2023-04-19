import React, { useContext } from 'react'
import { datos } from '../data/data'
import Contexto from '../contexto/Context'
import Formzona from './Formzona'

const Resumen = () => {
  const {misDatos} = useContext(Contexto);
  return (
    <>
      {misDatos.map((dato,index)=>
        <div key={index}>
        <p className='pru'>{dato.lugar}</p>
        <p>{dato.precio}</p>
        <img src={dato.imagen} alt="a" />
      </div>
      )
        }
    </>
  )
}

export default Resumen
