/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLikeStudent(token,post_id,index,item) {
    return {
        type: types.STUDENT_LIKE_POST_REQUEST ,
        post_id,
        token,
        index,
        item
    };
}
  
export function likeStudentFailed() {
    return {
        type: types.STUDENT_LIKE_POST_FAILED
    };
}

export function likeStudentResponse(response) {
    return {
        type: types.STUDENT_LIKE_POST_RESPONSE,
        response
    };
}

export function onLikeStudentSucess(params){
    return{
        type:types.STUDENT_LIKE_POST_SUCESS,
        ...params

    }
}

