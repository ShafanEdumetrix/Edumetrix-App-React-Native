import { put, call } from 'redux-saga/effects';
import * as notificationsList from 'app/actions/notificationsList';
import notificationList from 'app/api/methods/notificationList';


//Our worker Saga that rates a movie
export default function* notificationListAsync(action) {
  yield put(notificationsList.enableLoader());
    try {
        const response = yield call(
            notificationList,
            action.token
        );

        if (response.status == 200) {
            yield put(notificationsList.notificationResponse(response.notifications));
            yield put(notificationsList.disableLoader());
        }
    } catch (error) {
        yield put(notificationsList.notificationFailed({}));
        yield put(notificationsList.disableLoader());
    }
}
