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
      return {
        ...state,
        exercises: action.payload,
      };
    case types.exerciseSetActiveTraining:
      return {
        ...state,
        activeExercises: [
          ...state.activeExercises,
          {
            id: action.payload.id,
            nombre: action.payload.nombre,
            rutina: action.payload.rutina,
          },
        ],
      };

    case types.exerciseUpdateActiveTraining:
      return {
        ...state,
        activeExercises: state.activeExercises.map((exercise) => {
          const rutina = action.payload.rutina;
          
          if (exercise.id === action.payload.id) {
            
            return ({ nombre: exercise.nombre, id: exercise.id, rutina : rutina });
          } else {
            return exercise;
          }
        }),
      };
    default:
      return state;
  }
};
