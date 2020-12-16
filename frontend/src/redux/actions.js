import { BEERS_FROM_API, UPDATE_BEER } from './actionTypes';
import beerApi from '../api/beers';

export async function fetchBeers(dispatch, getState) {
    const response = await beerApi.get('/getAll')
    dispatch({ type: BEERS_FROM_API, payload: response.data})
}

// export async function updateBeer(dispatch, beerId, beerRating) {
//     const response = await beerApi.put(`/rating/${beerId}`, { rating: beerRating })
//     dispatch({ type: UPDATE_BEER, payload: response.data})
// }
