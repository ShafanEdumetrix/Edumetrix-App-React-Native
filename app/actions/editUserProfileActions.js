/*
 * Reducer actions related with edit user profile
 */
import * as types from './types';

export function requestEditUSer(token) {
    return {
        type: types.EDIT_USER_PROFILE_REQUEST,
        token
    };
}

export function editUserFailed() {
    return {
        type: types.EDIT_USER_PROFILE_FAILED
    };
}

export function editUserResponse(response) {
    return {
        type: types.EDIT_USER_PROFILE_RESPONSE,
        response
    };
}


