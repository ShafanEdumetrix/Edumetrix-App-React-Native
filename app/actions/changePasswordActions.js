/*
 * Reducer actions related with add bank
 */
import * as types from './types';

export function changePassword(token,old_password,password) {
    return {
        type: types.CHANGE_PASSWORD_REQUEST,
        token,old_password,password
    };
}

export function changePasswordFailed() {
    return {
        type: types.CHANGE_PASSWORD_FAILED
    };
}

export function changePasswordResponse(response) {
    return {
        type: types.CHANGE_PASSWORD_RESPONSE,
        response
    };
}
