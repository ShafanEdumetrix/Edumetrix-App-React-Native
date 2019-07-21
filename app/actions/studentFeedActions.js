/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestStudentFeed(token,student_userid) {
    return {
        type: types.STUDENT_FEED_REQUEST ,
        token,
        student_userid       
    };
}

export function studentFeedFailed() {
    return {
        type: types.STUDENT_FEED_FAILED
    };
}

export function studentFeedResponse(response) {
    return {
        type: types.STUDENT_FEED_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.STUDENT_FEED_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.STUDENT_FEED_DISABLE_LOADER
    };
}
