/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestUnLikeMyHome(token,post_id,index,item) {
    return {
        type: types.MY_HOME_UNLIKE_POST_REQUEST ,
        post_id,
        token,
        index,
        item
    };
}
 
export function unLikeMyHomeFailed() {
    return {
        type: types.MY_HOME_UNLIKE_POST_FAILED
    };
}

export function unLikeMyHomeResponse(response) {
    return {
        type: types.MY_HOME_UNLIKE_POST_RESPONSE,
        response
    };
}

export function onUnLikeMyHomeSucess(params){
    return{
        type:types.MY_HOME_UNLIKE_POST_SUCESS,
        ...params

    }
}

export function onUnLikeStudentSucess(params){
    return{
        type:types.MY_HOME_UNLIKE_POST_STUDENT_SUCESS,
        ...params

    }
}
