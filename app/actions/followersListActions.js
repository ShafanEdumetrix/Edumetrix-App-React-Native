/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAllFollowers(token) {
    return {
        type: types.FOLLOWERS_LIST_REQUEST,
        token
    };
}

export function followersFailed() {
    return {
        type: types.FOLLOWERS_LIST_FAILED
    };
}

export function followersResponse(response) {
    return {
        type: types.FOLLOWERS_LIST_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.FOLLOWERS_LIST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.FOLLOWERS_LIST_DISABLE_LOADER
    };
}
