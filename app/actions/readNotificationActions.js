
import * as types from './types';

export function requestReadNotification(token,notification_id) {
    return {
        type: types.READ_NOTIFICATION_REQUEST ,
        token,
        notification_id     
    };
}

export function notificationReadFailed() {
    return {
        type: types.READ_NOTIFICATION_FAILED
    };
}

export function notificationReadResponse(response) {
    return {
        type: types.READ_NOTIFICATION_RESPONSE,
        response
    };
}


