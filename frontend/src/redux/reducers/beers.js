import { BEERS_FROM_API_SUCCESS, UPDATE_RATED_BEER_SUCCESS } from "../actionTypes";

const initialState = {
    beers: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case BEERS_FROM_API_SUCCESS: {
            return {
                ...state,
                beers: action.payload || [] 
            }
        }
        case UPDATE_RATED_BEER_SUCCESS: {
            const existingBeers = state.beers;
            const indexOfBeerToUpdate = existingBeers.findIndex(beer => beer.id === action.payload.id);
            existingBeers[indexOfBeerToUpdate] = action.payload;
            return {
                ...state,
                beers: existingBeers,
            }
        } 
        default:
            return state;
    }
}