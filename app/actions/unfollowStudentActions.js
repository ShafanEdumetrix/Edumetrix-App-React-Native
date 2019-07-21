
import * as types from './types';

export function requestUnFollowStudent(token,follow_studentuser_id,item,index) {
    return {
        type: types.UNFOLLOW_STUDENT_REQUEST,
        token,
        follow_studentuser_id,
        item,
        index
    };
}

export function unFollowStudentFailed() {
    return {
        type: types.UNFOLLOW_STUDENT_FAILED
    };
}

export function unFollowStudentResponse(response) {
    return {
        type: types.UNFOLLOW_STUDENT_RESPONSE,
        response
    };
}

export function unFollowStudentSucess(params){
    return{
        type:types.UNFOLLOW_STUDENT_SUCESS,
        ...params

    }
}

