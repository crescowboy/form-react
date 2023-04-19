import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import Resumen from './Resumen';
import { NavLink, Navigate } from 'react-router-dom';
import Contexto from '../contexto/Context';

const Formpreguntas = () => {
    const {register,handleSubmit,formState:{errors},watch} = useForm();
    const [activeQuestion,setActiveQuestion] = useState(1);
    const {misDatos,setMisDatos} = useContext(Contexto);
    const {addDatos,setAddDatos,nombre,setNombre,habitacion,setHabitacion,personas,setPersonas,dias,setDias} = useContext(Contexto);
    const obtenerValores=(data)=>{
        
        // console.log(data)

       
        
        // setAddDatos([...addDatos,{
        //     nombre: data.nombre,
        //     habitacion: data.habitacion,
        //     personas: data.personas,
        //     dias: data.dias
        // }])
        setActiveQuestion(activeQuestion+1);
        setNombre(data.nombre)
        setHabitacion(data.habitacion)
        setPersonas(data.personas)
        setDias(data.dias)
        // console.log(addDatos)
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
            <input className='textfiel' type="text" name='nombre' autoFocus {...register("nombre",
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
            
            <input className='textfiel' type="number" name='habitacion' autoFocus {...register("habitacion",
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
            <input className='textfiel' type="number" name='personas' autoFocus {...register("personas",
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
            <input className='textfiel' type="number" name='dias' autoFocus {...register("dias",
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
            <NavLink className='boton' to="/">Volver</NavLink>
            <button className='boton'>Imprimir</button>
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
