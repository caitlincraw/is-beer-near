import { BEERS_FROM_API } from "../actionTypes";

const initialState = {
    beers: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case BEERS_FROM_API: {
            return {
                ...state,
                beers: action.payload || [] 
            }
        }
        default:
            return state;
    }
}