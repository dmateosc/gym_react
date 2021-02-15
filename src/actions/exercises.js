import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";



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




export const startActiveTraining = (id,  nombre,rutina) => {
    return(dispatch) => {
    const exercise = {
        id,nombre, rutina
    }

    debugger
    dispatch(exerciseCreateTraining(exercise))
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

const exerciseUpdateActiveTraining = (exercise) => ({

    type: types.exerciseUpdateActiveTraining,
    payload: exercise

})