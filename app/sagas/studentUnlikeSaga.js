import { put, call ,select} from 'redux-saga/effects';
import * as studentUnLikeActions from 'app/actions/studentUnLikeActions';
import unLikePost from 'app/api/methods/unLikePost';
import * as studentFeedActions from 'app/actions/studentFeedActions';

export const reducerStates = (state) => {
    return {
        data: state.studentFeedReducer.data
    };
};


//Our worker Saga that rates a movie
export default function* studentUnlikeAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(studentFeedActions.enableLoader());
    try {
        const response = yield call(
            unLikePost,
            action.token,
            action.post_id
        );
        let index = action.index;
        let item = action.item;
        let editedData = loginState.data[index];
        editedData.like_flag = 0;
        editedData.like_count=item.like_count - 1;
        loginState.data[index] = editedData;
        if (response.status == 200) {
            yield put(studentUnLikeActions.unLikeStudentResponse(loginState.data));
        }
        yield put(studentFeedActions.disableLoader());

    } catch (error) {
        yield put(studentUnLikeActions.unLikeStudentFailed({}));
        yield put(studentFeedActions.disableLoader());

    }
}
