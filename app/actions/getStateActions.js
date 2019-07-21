/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestState(country_id) {
    return {
        type: types.GET_STATES_REQUEST ,
        country_id       
    };
}

export function getStateFailed() {
    return {
        type: types.GET_STATES_FAILED
    };
}

export function stateResponse(response) {
    return {
        type: types.GET_STATES_RESPONSE,
        response
    };
}


