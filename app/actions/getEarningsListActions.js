/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestEarningsList(token) {
    return {
        type: types.GET_EARNINGS_LIST_REQUEST,
        token
        
    };
}

export function earningListFailed() {
    return {
        type: types.GET_EARNINGS_LIST__FAILED
    };
}

export function earningListResponse(response) {
    return {
        type: types.GET_EARNINGS_LIST_RESPONSE,
        response
    };
}
export function enableLoader() {
    return {
        type: types.GET_EARNINGS_LIST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.GET_EARNINGS_LIST_DISABLE_LOADER
    };
}

