/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLikeMyHome(token,post_id,index,item) {
    return {
        type: types.MY_HOME_LIKE_POST_REQUEST ,
        post_id,
        token,
        index,
        item
    };
}
 
export function likeMyHomeFailed() {
    return {
        type: types.MY_HOME_LIKE_POST_FAILED
    };
}

export function likeMyHomeResponse(response) {
    return {
        type: types.MY_HOME_LIKE_POST_RESPONSE,
        response
    };
}

export function onLikeMyHomeSucess(params){
    return{
        type:types.MY_HOME_LIKE_POST_SUCESS,
        ...params

    }
}

export function onLikeStudentSucess(params){
    return{
        type:types.LIKE_POST_STUDENT_SUCESS,
        ...params

    }
}
