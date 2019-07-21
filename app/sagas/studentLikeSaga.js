import { put, call,select } from 'redux-saga/effects';
import * as studentLikeActions from 'app/actions/studentLikeActions';
import likePost from 'app/api/methods/likePost';
import * as studentFeedActions from 'app/actions/studentFeedActions';

export const reducerStates = (state) => {
    return {
      data: state.studentFeedReducer.data
    };
};

//Our worker Saga that rates a movie
export default function* studentLikeAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(studentFeedActions.enableLoader());
    try {
        const response = yield call(
            likePost,
            action.token,
            action.post_id
        );
        let index = action.index;
        let item = action.item;
        let editedData = loginState.data[index];
        editedData.like_flag = 1;
        editedData.like_count=item.like_count+1;
        loginState.data[index] = editedData;
        if (response.status == 200) {
            yield put(studentLikeActions.likeStudentResponse(loginState.data));
        }
        yield put(studentFeedActions.disableLoader());

    } catch (error) {
        yield put(studentLikeActions.likeStudentFailed({}));
        yield put(studentFeedActions.disableLoader());

    }
}
