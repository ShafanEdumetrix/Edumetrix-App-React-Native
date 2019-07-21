/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestUnLikeStudent(token,post_id,index,item) {
    return {
        type: types.STUDENT_UNLIKE_POST_REQUEST ,
        post_id,
        token,
        index,
        item
    };
}
 
export function unLikeStudentFailed() {
    return {
        type: types.STUDENT_UNLIKE_POST_FAILED
    };
}

export function unLikeStudentResponse(response) {
    return {
        type: types.STUDENT_UNLIKE_POST_RESPONSE,
        response
    };
}

export function onUnLikeStudentSucess(params){
    return{
        type:types.STUDENT_UNLIKE_POST_SUCESS,
        ...params

    }
}

