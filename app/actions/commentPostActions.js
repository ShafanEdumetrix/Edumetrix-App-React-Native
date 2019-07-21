/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestComment(token, post_id,comment) {
    return {
        type: types.COMMENT_POST_REQUEST,
        token,
        post_id,
        comment
    };
}

export function commentFailed() {
    return {
        type: types.COMMENT_POST_FAILED
    };
}

export function onCommentResponse(response) {
    return {
        type: types.COMMENT_POST_RESPONSE,
        response
    };
}

export function onCommentSucess(params){
    return{
        type:types.COMMENT_POST_SUCESS,
        ...params
    }
}
    