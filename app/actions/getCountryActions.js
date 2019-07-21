/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAllCountry() {
    return {
        type: types.GET_COUNTRIES_REQUEST ,
               
    };
}

export function requestCountryFailed() {
    return {
        type: types.GET_COUNTRIES_FAILED
    };
}

export function countryResponse(response) {
    return {
        type: types.GET_COUNTRIES_RESPONSE,
        response
    };
}

