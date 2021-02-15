import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateTableExercise } from './CreateTableExercise'
import moment from 'moment'
import "moment/locale/es";
import { useForm } from '../../hooks/useForm'


moment.locale("es");


export const Exercises = ({nombre, id}) => {
   

    const dispatch = useDispatch()
    const { uid} = useSelector(state => state.auth)
    const initFilas =[{peso: '', respeticion:''}]

    const [filasTabla, setFilasTabla] = useState(initFilas)
    const [createTable, setCreateTable] = useState(false)
    
    
    useEffect(() => {
      
    }, [filasTabla])
    
    
    const addRow = (e,idRow ) => {
        e.preventDefault()
        setFilasTabla([...filasTabla, {peso: '', respeticion:''} ])
    }

   
    return (
        <div>
            {nombre}
            
                <button onClick={() => setCreateTable(!createTable)}>Crear Tabla</button>
                <form action="">
               
            {
                createTable && filasTabla.map((filas,index) => {
                    
                    let peso = `peso_${id}${uid}_${index}`
                    let repeticion = `repeticion_${id}${uid}_${index}`
                    return (
                    <div>
                   <CreateTableExercise key={`${id}${uid}_${index}`} {...filas} index={index} pesoId={peso} repeticionId={repeticion} setFilasTabla={setFilasTabla} />
                   <button onClick={(e) => addRow(e, `${id}${uid}_${index+1}`)}>+</button>
                   </div>)
                })
            }

            </form>
        </div>
        
        /*Aqui para crear la tabla añadiremos todo lo que es el registro, con usuario, fecha e id de ejercicio */
    )
}
