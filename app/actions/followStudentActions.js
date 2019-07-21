/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestFollowStudent(token,follow_studentuser_id,item,index) {
    return {
        type: types.FOLLOW_STUDENT_REQUEST,
        token,
        follow_studentuser_id,
        item,index
    };
}

export function followStudentFailed() {
    return {
        type: types.FOLLOW_STUDENT_FAILED
    };
}

export function followStudentResponse(response) {
    return {
        type: types.FOLLOW_STUDENT_RESPONSE,
        response
    };
}

export function followStudentSucess(params) {
    return {
        type: types.FOLLOW_STUDENT_SUCESS,
        ...params
    };
}
