import { put, call,select } from 'redux-saga/effects';
import * as myHomeLikeActions from 'app/actions/myHomeLikeActions';
import likePost from 'app/api/methods/likePost';
import * as getAllUserPostActions from 'app/actions/getAllUserPostActions';

export const reducerStates = (state) => {
    return {
      data: state.getUserPostDataReducer.data
    };
};

//Our worker Saga that rates a movie
export default function* myHomeLikeAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(getAllUserPostActions.enableLoader());
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
            yield put(myHomeLikeActions.likeMyHomeResponse(loginState.data));
        }
        yield put(getAllUserPostActions.disableLoader());

    } catch (error) {
        yield put(myHomeLikeActions.likeMyHomeFailed({}));
        yield put(getAllUserPostActions.disableLoader());

    }
}
