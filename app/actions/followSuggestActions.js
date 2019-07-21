/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestFollow(token,follow_studentuser_id,item,index) {
    return {
        type: types.FOLLOW_SUGGEST_REQUEST,
        token,
        follow_studentuser_id,
        item,index
    };
}

export function followSuggestFailed() {
    return {
        type: types.FOLLOW_SUGGEST_FAILED
    };
}

export function followSuggestResponse(response) {
    return {
        type: types.FOLLOW_SUGGEST_RESPONSE,
        response
    };
}

export function followSuggestSucess(params) {
    return {
        type: types.FOLLOW_SUGGEST_SUCESS,
        ...params
    };
}
