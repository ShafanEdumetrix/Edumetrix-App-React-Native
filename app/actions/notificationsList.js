
import * as types from './types';

export function requestNotification(token) {
    return {
        type: types.GET_NOTIFICATION_REQUEST ,
        token
    };
}

export function notificationFailed() {
    return {
        type: types.GET_NOTIFICATION_FAILED
    };
}

export function notificationResponse(response) {
    return {
        type: types.GET_NOTIFICATION_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.NOTIFICATIONLIST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.NOTIFICATIONLIST_DISABLE_LOADER
    };
}
