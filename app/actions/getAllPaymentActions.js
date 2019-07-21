/*
 * Reducer actions related with all payment
 */
import * as types from './types';

export function requestAllPayment(token) {
    return {
        type: types.ALL_PAYMENT_REQUEST,
        token
        
    };
}

export function allPaymentFailed() {
    return {
        type: types.ALL_PAYMENT_FAILED
    };
}

export function allPaymentResponse(response) {
    return {
        type: types.ALL_PAYMENT_RESPONSE,
        response
    };
}


