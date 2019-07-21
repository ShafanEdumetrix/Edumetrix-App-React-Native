/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestUser(token) {
    return {
        type: types.USER_DETAILS_REQUEST,
        token
    };
}

export function userFailed() {
    return {
        type: types.USER_DETAILS_FAILED
    };
}

export function onUserResponse(response) {
    return {
        type: types.USER_DETAILS_RESPONSE,
        response
    };
}


 