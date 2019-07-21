/*
 * Reducer actions related with add bank
 */
import * as types from './types';

export function textFeedRequest(token,content) {
    return {
        type: types.TEXT_FEED_REQUEST,
        params:{token,
        content }   
    };
}

export function textFeedFailed() {
    return {
        type: types.TEXT_FEED_FAILED
    };
}

export function textFeedResponse(response) {
    return {
        type: types.TEXT_FEED_RESPONSE,
        response
    };
}

export function onTextFeedSucess(params){
    return{
        type:types.TEXT_FEED_SUCESS,
        ...params
    };
}
