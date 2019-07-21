import { put, call,select } from 'redux-saga/effects';
import * as likePostActions from 'app/actions/likePostActions';
import likePost from 'app/api/methods/likePost';
import * as homeActions from 'app/actions/homeActions';

export const reducerStates = (state) => {
    return {
      data: state.homeReducer.data
    };
};
 
//Our worker Saga that rates a movie
export default function* likePostAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(homeActions.enableLoader());
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
            yield put(likePostActions.likePostResponse(loginState.data));
        }
        yield put(homeActions.disableLoader());

    } catch (error) {
        yield put(likePostActions.likePostFailed({}));
        yield put(homeActions.disableLoader());

    }
}
 