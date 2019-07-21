/*
 * Reducer actions related with edit Post
 */
import * as types from './types';

export function requestEditPost(){
    return {
        type: types.EDIT_POST_REQUEST,
        params: {
            
           }
    };
}

export function editPostFailed() {
    return {
        type: types.EDIT_POST_FAILED
    };
}

export function onEditPost(response) {
    return {
        type: types.EDIT_POST_RESPONSE,
        response
    };
}

export function onEditPostUpdate(params) {
    return {
        type: types.EDIT_POST_UPDATE,
        params
    };
}

export function enableLoader() {
    return {
        type: types.EDIT_POST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.EDIT_POST_DISABLE_LOADER
    };
}