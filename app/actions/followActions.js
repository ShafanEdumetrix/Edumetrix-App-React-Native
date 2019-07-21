/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestFollow(token,follow_studentuser_id,item,index) {
    return {
        type: types.FOLLOW_REQUEST,
        token,
        follow_studentuser_id,
        item,index
    };
}

export function followFailed() {
    return {
        type: types.FOLLOW_FAILED
    };
}

export function followResponse(response) {
    return {
        type: types.FOLLOW_RESPONSE,
        response
    };
}

export function followSucess(params) {
    return {
        type: types.FOLLOW_SUCESS,
        ...params
    };
}
