import { types } from "../types/types";

const initialState = {
  //uid: null,
  //name: null
  exercises: [],
  activeExercises: [],
};
export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.exerciseShowExercises: 
    return{
      ...state,
      exercises: action.payload,
      
    }
    case types.exerciseSetActiveTraining:
      return {
        ...state,
        activeExercises:[
          ...state.activeExercises, action.payload
        ]
      }

    default:
      return state;
  }
};
