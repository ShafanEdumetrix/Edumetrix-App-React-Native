/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestPayment(token,amount) {
    return {
        type: types.PAYMENT_REQUEST ,
        token,
        amount
               
    };
}

export function paymentFailed() {
    return {
        type: types.PAYMENT_FAILED
    };
}

export function paymentResponse(response) {
    return {
        type: types.PAYMENT_RESPONSE,
        response
    };
}

