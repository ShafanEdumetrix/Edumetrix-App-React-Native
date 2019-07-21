/*
 * Reducer actions related with login
 */
import * as types from './types';

export function deletePostRequest(token, post_id) {
    return {
        type: types.DELETE_POST_REQUEST,
        token,
        post_id
    };
}

export function deletePostFailed() {
    return {
        type: types.DELETE_POST_FAILED
    };
}

export function deletePostResponse(response) {
    return {
        type: types.DELETE_POST_RESPONSE,
        response
    };
}

export function onDeleteSucess(params){
    return{
        type:types.DELETE_POST_SUCESS,
        ...params
    }
}

export function enableLoader() {
    return {
        type: types.DELETE_POST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.DELETE_POST_DISABLE_LOADER
    };
}
    