
import { types } from "../types/types";

const initialState = {
    date: Date.now(),
    training: [],
    activeTraining: null,
    

}

export const trainingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.trainingDay:
            return {
                ...state,
                training: [...action.payload],
              };
            break;
    
        default:
            break;
    }
}
