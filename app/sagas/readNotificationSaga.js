import { put, call } from 'redux-saga/effects';
import * as readNotificationActions from 'app/actions/readNotificationActions';
import readNotification from 'app/api/methods/readNotification';


//Our worker Saga that rates a movie
export default function* readNotificationAsync(action) {
    try {
        const response = yield call(
            readNotification,
            action.token,
            action.notification_id
        );
        
        if (response.status == 200) {
            yield put(readNotificationActions.notificationReadResponse(response));
        }
    } catch (error) {
        yield put(readNotificationActions.notificationReadFailed({}));
    }
}
