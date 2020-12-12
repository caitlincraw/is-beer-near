import { BEERS_FROM_API } from './actionTypes';
import beerApi from '../api/beers';


export async function fetchBeers(dispatch, getState) {
    const response = await beerApi.get('/getAll')
    dispatch({ type: BEERS_FROM_API, payload: response.data})
}