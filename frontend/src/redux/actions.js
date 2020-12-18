import { BEERS_FROM_API_SUCCESS, BEERS_FROM_API_FAILURE, UPDATE_RATED_BEER_SUCCESS, UPDATE_RATED_BEER_FAILURE } from './actionTypes';
import beerApi from '../api/beers';

export async function fetchBeers(dispatch, getState) {
    try {
        const response = await beerApi.get('/getAll');
        dispatch({ 
            type: BEERS_FROM_API_SUCCESS, 
            payload: response.data
        });
    } catch(err) {
        dispatch({ 
            type: BEERS_FROM_API_FAILURE, 
            payload: err
        });
    }
}

// write a wrapper function (synchronous) that accepts beer's id and rating as parameters 
export function updateBeer(beerId, beerRating) {
    return async function updateBeerThunk(dispatch, getState) { 
        try {
            const response = await beerApi.put(`/rating/${beerId}`, { rating: beerRating });
            dispatch({ 
                type: UPDATE_RATED_BEER_SUCCESS, 
                payload: response.data
            });
        } catch(err) {
            dispatch({ 
                type: UPDATE_RATED_BEER_FAILURE, 
                payload: err
            });
        }
    }
}