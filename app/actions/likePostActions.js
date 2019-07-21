/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLikePost(token,post_id,index,item) {
    return {
        type: types.LIKE_POST_REQUEST ,
        post_id,
        token,
        index,
        item
    };
}

export function likePostFailed() {
    return {
        type: types.LIKE_POST_FAILED
    };
}

export function likePostResponse(response) {
    return {
        type: types.LIKE_POST_RESPONSE,
        response
    };
}

export function onLikeSucess(params){
    return{
        type:types.LIKE_POST_SUCESS,
        ...params

    }
}

export function onLikeStudentSucess(params){
    return{
        type:types.LIKE_POST_STUDENT_SUCESS,
        ...params

    }
}
