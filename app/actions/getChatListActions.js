/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestChatList(token) {
    return {
        type: types.GET_CHAT_LIST_REQUEST,
        token
        
    };
}

export function chatListFailed() {
    return {
        type: types.GET_CHAT_LIST_FAILED
    };
}

export function onChatListResponse(response) {
    return {
        type: types.GET_CHAT_LIST_RESPONSE,
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
 