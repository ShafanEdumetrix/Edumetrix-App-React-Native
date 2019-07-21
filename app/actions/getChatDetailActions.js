/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestChatDetail(token,receiver_id) {
    return {
        type: types.GET_CHAT_DETAIL_REQUEST ,
        token,
        receiver_id       
    };
}

export function chatDetailFailed() {
    return {
        type: types.GET_CHAT_DETAIL_FAILED
    };
}

export function chatDetailResponse(response) {
    return {
        type: types.GET_CHAT_DETAIL_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.GET_CHAT_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.GET_CHAT_DISABLE_LOADER
    };
}
    