/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestHome(token,page) {
    return {
        type: types.HOME_REQUEST,
        token,
        page
    };
}

export function homeFailed() {
    return {
        type: types.HOME_FAILED
    };
}

export function onHomeResponse(response) {
    return {
        type: types.HOME_RESPONSE,
        response
    };
}

export function onHomeEdited(like_count) {
    return {
        type: types.HOME_LIKE_EDITED,
        like_count
    };
}

export function enableLoader() {
    return {
        type: types.HOME_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.HOME_DISABLE_LOADER
    };
}

