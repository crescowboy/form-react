import React, { useContext, useState } from 'react'
import {useForm} from "react-hook-form"
import { datos } from '../data/data';
import Contexto from '../contexto/Context';
import { useNavigate } from 'react-router-dom';

const Formzona = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {etapas,setEtapas,misDatos,setMisDatos}=useContext(Contexto);
    const navegacion=useNavigate();
    const obtenerValores = (data)=>{
        console.table(data)
        
        const miZona=data.selected;
        const Datos = datos.find(d=>d.lugar === miZona);
        setMisDatos([...misDatos, {
            imagen: Datos.imagen,
            lugar: Datos.lugar,
            precio: Datos.precio,
          }]);
        setEtapas(etapas+3);
        navegacion("/preguntas")
        console.log(misDatos)
    }
    
    // const [selectedOption, setSelectedOption] = useState("");

   
  return (
    <>
        <form onSubmit={handleSubmit(obtenerValores)}>
        <div className='input'>
        <label htmlFor='enviar'>Seleccione la zona a visitar:
        <input type="submit" />
        </label>
        {errors.selected?.type === "required" &&
        <div className='aviso'>Seleccione una opcion</div>}
        </div>
        
        <div className='seleccion'>
        {datos.map((opcion,index)  => (
            <div className='opcion' key={index}>
            <label>
            <input 
                type="radio" 
                name="selected" 
                value={opcion.lugar}
                {...register("selected",
                {
                    required:true,
                }
                )}
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
