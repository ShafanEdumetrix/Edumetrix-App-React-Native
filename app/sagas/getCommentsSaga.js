import { put, call } from 'redux-saga/effects';
import * as getCommentsActions from 'app/actions/getCommentsActions';
import getComments from 'app/api/methods/getComments';

//Our worker Saga that rates a movie
export default function* getCommentsAsync(action) {
    yield put(getCommentsActions.enableLoader());
    try {
        const response = yield call(
            getComments,
            action.token,
            action.post_id
        );        
        if (response.status == 200) {            
            yield put(getCommentsActions.commentsResponse(response.comments));
            yield put(getCommentsActions.disableLoader({}));
        }
    } catch (error) {
        yield put(getCommentsActions.commentsFailed({}));
        yield put(getCommentsActions.disableLoader({}));

    }
}
   