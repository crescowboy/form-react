import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Resumen from './Resumen';
import { NavLink } from 'react-router-dom';

const Formpreguntas = () => {
    const {register,handleSubmit,formState:{errors},watch} = useForm();
    const [activeQuestion,setActiveQuestion] = useState(1);
    const obtenerValores=(data)=>{
        setActiveQuestion(activeQuestion+1)
    }
  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        {activeQuestion === 1 &&(
            <div className='preguntas'>
            <div className='labes'>
                    <label htmlFor="nombre">Escribe tu nombre y apellidos: </label>
                    <div>
                    {watch("nombre") &&
                    <div className='resumen'>{watch("nombre")} como nombre de usuario</div>}
                    </div><br></br>
                </div>
            <input className='textfiel' type="text" name='nombre' {...register("nombre",
            {
                required:true,
                maxLength:15
            }
            )}/>
            <br>
            </br>
            {errors.nombre?.type === "required" &&
            <div className='aviso2'>Este dato es obligatorio</div>}
            <input className='boton' type="submit" />
            
        </div>

           
        )}

{activeQuestion === 2 &&(
            <div className='preguntas'>
                <div className='labes'>
                    <label htmlFor="nombre">Cuantas habitaciones quieres?: </label>
                    <div>
                    {watch("habitacion") &&
                    <div className='resumen'>{watch("habitacion")} habitaciones</div>}
                    </div><br></br>
                </div>
            
            <input className='textfiel' type="number" name='habitacion' {...register("habitacion",
            {
                required:true,
                maxLength:15,
                min:1,
                max:7

            }
            )}/>
            
            <br>
            </br>
            {errors.habitacion?.type === "required" &&
            <div className='aviso2'>Este dato es obligatorio</div>}
            {(errors.habitacion?.type === "min") &&
            <div className='aviso2'>La cantidad minima de habitaciones es 1</div>}
            {(errors.habitacion?.type === "max") &&
            <div className='aviso2'>La cantidad maxima de habitaciones es 7</div>}
            <input className='boton' type="submit" />
            
        </div>
        
           
        )}

        {activeQuestion === 3 &&(
            <div className='preguntas'>
            <div className='labes'>
                    <label htmlFor="nombre">Cuantas personas son?: </label>
                    <div>
                    {watch("personas") &&
                    <div className='resumen'>{watch("personas")} personas</div>}
                    </div><br></br>
                </div>
            <input className='textfiel' type="number" name='personas' {...register("personas",
            {
                required:true,
                maxLength:15,
                min:1,
                max:7
            }
            )}/>
            <br>
            </br>
            {errors.personas?.type === "required" &&
            <div className='aviso2'>Este dato es obligatorio</div>}
            {(errors.personas?.type === "min") &&
            <div className='aviso2'>La cantidad minima de personas es 1</div>}
            {(errors.personas?.type === "max") &&
            <div className='aviso2'>La cantidad maxima de personas es 7</div>}
            <input className='boton' type="submit" />
           
            
        </div>
        
           
        )}

        {activeQuestion === 4 &&(
            <div className='preguntas'>
            <div className='labes'>
                    <label htmlFor="nombre">Seleccione el numero de dias: </label>
                    <div>
                    {watch("dias") &&
                    <div className='resumen'>{watch("dias")} dias</div>}
                    </div><br></br>
                </div>
            <input className='textfiel' type="number" name='dias' {...register("dias",
            {
                required:true,
                maxLength:15,
                min:1,
                max:7
            }
            )}/>
            <br>
            </br>
            {errors.dias?.type === "required" &&
            <div className='aviso2'>Este dato es obligatorio</div>}
            {(errors.dias?.type === "min") &&
            <div className='aviso2'>La cantidad minima de dias es 1</div>}
            {(errors.dias?.type === "max") &&
            <div className='aviso2'>La cantidad maxima de dias es 7</div>}
            <input className='boton' type="submit" />
            
        </div>
        
           
        )}

        

        {activeQuestion === 5 &&(
            <div className='preguntas'>
            <label htmlFor="nombre">¿Quieres modificar los datos o finalizar e imprimir tu pedido?</label><br></br>
            <NavLink to="/">Volver</NavLink>
            <button className='boton'>Volver</button><button className='boton'>Imprimir</button>
            <br>
            </br>
            
            
            
        </div>
        
           
        )}
        
      </form>
      <Resumen></Resumen>
    </>
  )
}

export default Formpreguntas
