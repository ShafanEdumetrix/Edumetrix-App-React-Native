/*
 * Reducer actions related with login
 */
import * as types from './types';

export function deleteHomePostRequest(token,post_id,index,item) {
    return {
        type: types.DELETE_HOME_POST_REQUEST,
        token,
        post_id,
        index,
        item
    };
}

export function deleteHomePostFailed() {
    return {
        type: types.DELETE_HOME_POST_FAILED
    };
}

export function deleteHomePostResponse(response) {
    return {
        type: types.DELETE_HOME_POST_RESPONSE,
        response
    };
}

export function onDeleteSucess(params){
    return{
        type:types.DELETE_HOME_POST_SUCESS,
        ...params
    }
}

export function enableLoader() {
    return {
        type: types.DELETE_HOME_POST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.DELETE_HOME_POST_DISABLE_LOADER
    };
}
    