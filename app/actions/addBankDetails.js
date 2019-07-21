/*
 * Reducer actions related with add bank
 */
import * as types from './types';

export function addBankRequest(token,bank_name,branch,ifsc_code,account_no,account_holder_name) {
    return {
        type: types.ADD_BANK_DETAILS_REQUEST,
        token,bank_name,branch,ifsc_code,account_no,account_holder_name
    };
}

export function addBankFailed() {
    return {
        type: types.ADD_BANK_DETAILS_FAILED
    };
}

export function addBankResponse(response) {
    return {
        type: types.ADD_BANK_DETAILS_RESPONSE,
        response
    };
}
