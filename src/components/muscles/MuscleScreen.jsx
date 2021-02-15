import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetMuscles } from '../../actions/muscle'

export const MuscleScreen = () => {

    const dispatch = useDispatch()
    const {muscles} = useSelector(state => state.muscle)
    useEffect(() => {
        
        dispatch(startGetMuscles())
       
    }, [dispatch])

    return (
        <div>
             Pagina musculos
            {
                muscles && 
                muscles.map((muscle) => {
                return (
                    <Link to={`/exercises/${muscle.nombre}`}>
                        {muscle.nombre}
                    </Link>
                )})
                  
                }
        </div>
    )
}
