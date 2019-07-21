import { put, call } from 'redux-saga/effects';
import * as followersListActions from 'app/actions/followersListActions';
import followersList from 'app/api/methods/followersList';

//Our worker Saga that rates a movie
export default function* followersListAsync(action) {
    yield put(followersListActions.enableLoader());
    try {
        const response = yield call(
            followersList,
            action.token
        );

        if (response.status == 200) {
            yield put(followersListActions.followersResponse(response.followers));
            yield put(followersListActions.disableLoader());
        }
    } catch (error) {
        yield put(followersListActions.followersFailed({}));
        yield put(followersListActions.disableLoader());
    }
}
