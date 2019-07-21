/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestChat(token, receiver_id, message) {
    return {
        type: types.SEND_CHAT_REQUEST,
        token,
        receiver_id,
        message
    };
}

export function chatFailed() {
    return {
        type: types.SEND_CHAT_FAILED
    };
}

export function onChatResponse(response) {
    return {
        type: types.SEND_CHAT_RESPONSE,
        response
    };
}

export function onChatSucess(params){
    return{
        type:types.SEND_CHAT_SUCESS,
        ...params
    }
}

