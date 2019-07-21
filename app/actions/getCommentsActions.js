/*
 * Reducer actions related with get comments
 */
import * as types from './types';

export function requestComments(token,post_id) {
    return {
        type: types.GET_COMMENTS_REQUEST,
        token,
        post_id
        
    };
}

export function commentsFailed() {
    return {
        type: types.GET_COMMENTS_FAILED
    };
}

export function commentsResponse(response) {
    return {
        type: types.GET_COMMENTS_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.GET_COMMENTS_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.GET_COMMENTS_DISABLE_LOADER
    };
}
 