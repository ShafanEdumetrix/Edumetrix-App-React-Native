import { put, call } from 'redux-saga/effects';
import * as studentFeedActions from 'app/actions/studentFeedActions';
import studentFeed from 'app/api/methods/studentFeed';

//Our worker Saga that rates a movie
export default function* studentFeedAsync(action) {
    yield put(studentFeedActions.enableLoader());
    try {
        const response = yield call(
            studentFeed,
            action.token,
            action.student_userid
        );
        
        if (response.status == 200) {
            yield put(studentFeedActions.studentFeedResponse(response.students_newsfeeds));
        }
        yield put(studentFeedActions.disableLoader({}));
    } catch (error) {
        yield put(studentFeedActions.studentFeedFailed({}));
        yield put(studentFeedActions.disableLoader({}));

    }
}
