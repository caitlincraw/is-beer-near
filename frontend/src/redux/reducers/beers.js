import { BEERS_FROM_API, UPDATE_RATED_BEER } from "../actionTypes";

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
        case UPDATE_RATED_BEER: {
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