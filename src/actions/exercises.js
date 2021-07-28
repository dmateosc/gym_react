import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";



export const startExercises = (muscle) => {
return async (dispatch) => {
    try {
        
        const resp = await fetchConToken(`exercises/${muscle}`)
        const exercises = await resp.json()
        
        dispatch(setExercises(exercises))
    } catch (error) {
        console.log(error)
    }
}

}

export const startTrainingDay = () =>{
    return async (dispatch) => {
        try{
            const { uid } = useSelector((state) => state.auth);
            const resp = await fetchConToken(`training/${uid}/${Date.now().toString()}`)
            const trainingday = await resp.json();

            dispatch(setTrainingDay(trainingday))
        }catch(error){
            console.log(error)
        }
    }
}




export const startActiveTraining = (id,  nombre,rutina) => {
    return(dispatch) => {
    const exercise = {
        id,nombre, rutina
    }

    dispatch(exerciseCreateTraining(exercise))

    // fetchConToken(`training/${id}/${Date.now().toString()}`, exercise, "POST")



}
}
export const startAddColumnActiveTraining = (id,rutina) => {
    
    return(dispatch) => {
        
        const exercise = {
            id, rutina
        }
    
        dispatch(exerciseUpdateActiveTraining(exercise))
    }
}

const setExercises = (exercises) =>( {
    type: types.exerciseShowExercises,
    payload: exercises
})

const exerciseCreateTraining = (exercise) => ({

    type: types.exerciseSetActiveTraining,
    payload: exercise

})

const setTrainingDay = (exercises) => (
{
    type: types.trainingDay,
    payload: exercises
}

)

const exerciseUpdateActiveTraining = (exercise) => ({

    type: types.exerciseUpdateActiveTraining,
    payload: exercise

})