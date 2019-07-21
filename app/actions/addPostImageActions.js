/*
 * Reducer actions related with add bank
 */
import * as types from './types';

export function addPostImageRequest(image,content,token) {
    return {
        type: types.ADD_POST_IMAGE_REQUEST,
        params:{image,content,token}
    };
}
 
export function addPostImageFailed() {
    return {
        type: types.ADD_POST_IMAGE_FAILED
    };
}

export function addPostImageResponse(response) {
    return {
        type: types.ADD_POST_IMAGE_RESPONSE,
        response
    };
}

export function onPostImageSucess(params){
    return{
        type:types.ADD_POST_IMAGE_SUCESS,
        ...params

    }
}
