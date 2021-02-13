import { types } from "../types/types";

const initialState = {
  //uid: null,
  //name: null
  exercises: [],
  activeExercise: null,
};
export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.exerciseShowExercises: 
    return{
      ...state,
      exercises: action.payload,
      
    }

    default:
      return state;
  }
};
