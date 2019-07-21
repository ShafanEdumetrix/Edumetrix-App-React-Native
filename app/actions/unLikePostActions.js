/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestUnLikePost(token,post_id,index,item) {
    return {
        type: types.UNLIKE_POST_REQUEST ,
        post_id,
        token,
        index,
        item
    };
}

export function unLikePostFailed() {
    return {
        type: types.UNLIKE_POST_FAILED
    };
}

export function unLikePostResponse(response) {
    return {
        type: types.UNLIKE_POST_RESPONSE,
        response
    };
}

export function onUnLikeSucess(params){
    return{
        type:types.UNLIKE_POST_SUCESS,
        ...params

    }
}

export function onUnLikeStudentSucess(params){
    return{
        type:types.UNLIKE_POST_STUDENT_SUCESS,
        ...params

    }
}
