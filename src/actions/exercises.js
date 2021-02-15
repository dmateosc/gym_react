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

export const startExerciseCreateTraining = (exercise) => ({

    type: types.startActiveTraining,
    payload: exercise

})


export const startActiveTraining = (exercise) => {

}
export const startAddColumnActiveTraining = () => {

}

const setExercises = (exercises) =>( {
    type: types.exerciseShowExercises,
    payload: exercises
})
