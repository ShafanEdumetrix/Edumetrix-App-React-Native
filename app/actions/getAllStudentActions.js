/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAllStudent(token,page) {
    return {
        type: types.GET_ALL_STUDENT_REQUEST ,
        token,
        page
    };
}

export function getStudentFailed() {
    return {
        type: types.GET_ALL_STUDENT_FAILED
    };
}

export function getStudentResponse(response) {
    return {
        type: types.GET_ALL_STUDENT_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.GET_ALL_STUDENT_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.GET_ALL_STUDENT_DISABLE_LOADER
    };
}
