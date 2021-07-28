import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startTrainingDay } from '../../actions/exercises';

export const TrainingDayScreen = () => {


    const dispatch = useDispatch();

    const {training} = useSelector(state => state.training)

    useEffect(() => {
        
        dispatch(startTrainingDay())
        

    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}
