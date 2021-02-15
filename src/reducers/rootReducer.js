import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { exerciseReducer } from './exercisesReducer'
import { muscleReducer } from './muscleReducer'
import {uiReducer} from './uiReducer'

export const rootReducer = combineReducers({
    exercise: exerciseReducer,
    ui:uiReducer,
    auth: authReducer,
    muscle: muscleReducer
})