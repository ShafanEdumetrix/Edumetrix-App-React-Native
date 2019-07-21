import { put, call } from 'redux-saga/effects';
import * as userDetailsActions from 'app/actions/userDetailsActions';
import userDetails from 'app/api/methods/userDetails';

//Our worker Saga that rates a movie
export default function* userDetailsAsync(action) {
    try {
        const response = yield call(
            userDetails,
            action.token
        );
        
        if (response.status == 200) {
            yield put(userDetailsActions.onUserResponse(response.students_info));
        }
    } catch (error) {
        yield put(userDetailsActions.userFailed({}));

    }
}
