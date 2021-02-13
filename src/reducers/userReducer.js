import { types } from "../types/types";

const initialState = {
  user: [],
  //uid: null,
  //name: null
};


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userGetUser:
            return {
                user: action.payload
            }
            
    
        default:
            return state
    }
}
