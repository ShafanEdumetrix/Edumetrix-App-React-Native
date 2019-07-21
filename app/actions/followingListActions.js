/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAllFollowings(token) {
    return {
        type: types.FOLLOWINGS_LIST_REQUEST,
        token
    };
}

export function followingsFailed() {
    return {
        type: types.FOLLOWINGS_LIST_FAILED
    };
}

export function followingsResponse(response) {
    return {
        type: types.FOLLOWINGS_LIST_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.FOLLOWINGS_LIST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.FOLLOWINGS_LIST_DISABLE_LOADER
    };
}
