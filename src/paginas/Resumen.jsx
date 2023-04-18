import React from 'react'
import { datos } from '../data/data'

const Resumen = () => {
  return (
    <>
      {datos.map(item=>
        <div>
            <h3>Resumen:</h3>
            <img src={item.imagen} alt="img" />
            Zona:{item.lugar}
            
        </div>)}
    </>
  )
}

export default Resumen
