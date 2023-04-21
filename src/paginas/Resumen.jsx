import React, { useContext, useRef } from 'react';
import { datos } from '../data/data';
import Contexto from '../contexto/Context';
import Formzona from './Formzona';
import ReactToPrint from 'react-to-print';

const Resumen = () => {
  const { misDatos, addDatos } = useContext(Contexto);
  const { nombre, habitacion, personas, dias, componentRef } = useContext(Contexto);

 

  return (
    <>
      {misDatos.map((dato, index) => (
        <div className='container-resumen' key={index}>
         
          <div ref={componentRef}>
            <h3>Resumen:</h3>
            <img className='imgR' src={dato.imagen} alt='a' />
            <div className='content'>
              <div className='item'>
                <div>Zona:</div> <div>{dato.lugar}</div>
              </div>
              <div className='item'>
                <div>$ por dia:</div> <div>{dato.precio}</div>
              </div>

              <div className='item'>
                {nombre && <div>Nombre:</div>}
                {nombre && <div>{nombre}</div>}
              </div>
              <div className='item'>
                {habitacion && <div>Habitacion:</div>}
                {habitacion && <div>{habitacion}</div>}
              </div>
              <div className='item'>
                {personas && <div>Personas:</div>}
                {personas && <div>{personas}</div>}
              </div>
              <div className='item'>
                {dias && <div>Dias:</div>}
                {dias && <div>{dias}</div>}
              </div>
              {dias && (
                <div>
                  Cantidad a pagar: {dato.precio * dias * personas * habitacion}$
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resumen;
