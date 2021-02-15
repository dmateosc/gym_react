import { types } from "../types/types";

const initialState = {
  //uid: null,
  //name: null
  muscles: [],
};
export const muscleReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.muscleShowMuscles: 
    return{
      ...state,
      muscles: action.payload,
      
    }

    default:
      return state;
  }
};