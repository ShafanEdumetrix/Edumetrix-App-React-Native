/*
 * Reducer actions related with report admin
 */
import * as types from './types';

export function requestReport(token,post_id) {
    return {
        type: types.REPORT_ADMIN_REQUEST,
        token,
        post_id
        
    };
}

export function reportFailed() {
    return {
        type: types.REPORT_ADMIN_FAILED
    };
}

export function onReportResponse(response) {
    return {
        type: types.REPORT_ADMIN_RESPONSE,
        response
    };
}
