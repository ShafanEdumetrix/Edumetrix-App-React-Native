import { put, call ,select} from 'redux-saga/effects';
import * as unLikePostActions from 'app/actions/unLikePostActions';
import unLikePost from 'app/api/methods/unLikePost';
import * as homeActions from 'app/actions/homeActions';

export const reducerStates = (state) => {
    return {
      data: state.homeReducer.data
    };
};


//Our worker Saga that rates a movie
export default function* unLikePostAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(homeActions.enableLoader());
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
        console.log("FDGdgfdgfdg",item.like_count);
        loginState.data[index] = editedData;
        if (response.status == 200) {
            yield put(unLikePostActions.unLikePostResponse(loginState.data));
        }
        yield put(homeActions.disableLoader());

    } catch (error) {
        yield put(unLikePostActions.unLikePostFailed({}));
        yield put(homeActions.disableLoader());

    }
}
