/*
 * Reducer actions related with add bank
 */
import * as types from './types';

export function addPostVideoRequest(video,content,token) {
    return {
        type: types.ADD_POST_VIDEO_REQUEST,
        params:{video,content,token}
    };
}
 
export function addPostVideoFailed() {
    return {
        type: types.ADD_POST_VIDEO_FAILED
    };
}

export function addPostVideoResponse(response) {
    return {
        type: types.ADD_POST_VIDEO_RESPONSE,
        response
    };
}

export function onPostVideoSucess(params){
    return{
        type:types.ADD_POST_VIDEO_SUCESS,
        ...params

    }
}
