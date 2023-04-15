import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { datos } from '../data/data';

const Formzona = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const obtenerValores = (data)=>{
        console.table(data)
    }
    
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelect=(e)=>{
        setSelectedOption(e.target.value);
        console.log(e.target.value)
    }
  return (
    <>
        <form onSubmit={handleSubmit(obtenerValores)}>
        <div className='input'>
        <label htmlFor='enviar'>Seleccione la zona a visitar:
        <input type="submit" />
        </label>
        </div>
        <div className='seleccion'>
        {datos.map((opcion,index)  => (
            <div className='opcion' key={index}>
            <label>
            <input 
                type="radio" 
                name="selected" 
                value={opcion.lugar}
                checked={selectedOption === opcion.lugar} 
                onChange={handleSelect} 
                {...register("selected")} 
            />
            
            <p>{opcion.lugar}</p> 
            <p>({opcion.precio}$)</p>
            <img src={opcion.imagen} alt=''></img>
            
            </label>
        </div>
        ))}
        </div>
        </form>
     

    </>
  )
}

export default Formzona
