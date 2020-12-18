import { BEERS_FROM_API, UPDATE_RATED_BEER } from './actionTypes';
import beerApi from '../api/beers';

export async function fetchBeers(dispatch, getState) {
    const response = await beerApi.get('/getAll')
    dispatch({ type: BEERS_FROM_API, payload: response.data})
}

// write a wrapper function (synchronous) that accepts beer's id and rating as parameters 
export function updateBeer(beerId, beerRating) {
    return async function updateBeerThunk(dispatch, getState) { 
        const response = await beerApi.put(`/rating/${beerId}`, { rating: beerRating })
        dispatch({ type: UPDATE_RATED_BEER, payload: response.data})
    }
}
