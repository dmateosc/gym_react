import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { startExercises } from '../../actions/exercises';
import { Exercises } from './Exercises';

export const ExerciseScreen = () => {

    const { muscle } = useParams();
    
    const dispatch = useDispatch()
    const {exercises} = useSelector(state => state.exercise)
    useEffect(() => {
        
        dispatch(startExercises(muscle))

       
    }, [dispatch,muscle])

    
    return (
        <div>
            Pagina ejercicios
            <input type="date"/>
            {
                exercises.ejercicios && 
                exercises.ejercicios.map((ejercicio) => {
                return (
                    <Exercises key={ejercicio.id} {...ejercicio} />
                )})
                  
                }
        </div>
    )
}
