import { put, call } from 'redux-saga/effects';
import * as followingListActions from 'app/actions/followingListActions';
import followingList from 'app/api/methods/followingList';

//Our worker Saga that rates a movie
export default function* followingListAsync(action) {
    yield put(followingListActions.enableLoader());
    try {
        const response = yield call(
            followingList,
            action.token
        );

        if (response.status == 200) {
            yield put(followingListActions.followingsResponse(response.followings));
            yield put(followingListActions.disableLoader());
        }
    } catch (error) {
        yield put(followingListActions.followingsFailed({}));
        yield put(followingListActions.disableLoader());
    }
}
