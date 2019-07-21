/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestForgotPassword(email) {
    return {
        type: types.FORGOT_PASSWORD_REQUEST ,
        email       
    };
}

export function passwordFailed() {
    return {
        type: types.FORGOT_PASSWORD_FAILED
    };
}

export function onPasswordResponse(response) {
    return {
        type: types.FORGOT_PASSWORD_RESPONSE,
        response
    };
}

