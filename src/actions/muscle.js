import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startGetMuscles = () => {
    return async (dispatch) => {
        try {
            
            const resp = await fetchConToken(`muscles`)
            const {muscles} = await resp.json()
            
            dispatch(setMuscles(muscles))
        } catch (error) {
            console.log(error)
        }
    }
    
    
}

const setMuscles = (muscles) => ({
    type: types.muscleShowMuscles,
    payload: muscles
})