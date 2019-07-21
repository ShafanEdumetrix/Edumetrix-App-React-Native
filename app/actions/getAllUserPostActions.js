/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAllData(token) {
    return {
        type: types.GET_ALL_USER_ADDED_POST_REQUEST ,
        token       
    };
}

export function requestFailed() {
    return {
        type: types.GET_ALL_USER_ADDED_POST_FAILED
    };
}

export function onRequestResponse(response) {
    return {
        type: types.GET_ALL_USER_ADDED_POST_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.GET_ALL_USER_ADDED_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.GET_ALL_USER_ADDED_DISABLE_LOADER
    };
} 
 