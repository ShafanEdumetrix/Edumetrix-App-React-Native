import { put, call ,select} from 'redux-saga/effects';
import * as myHomeUnLikeActions from 'app/actions/myHomeUnLikeActions';
import unLikePost from 'app/api/methods/unLikePost';
import * as getAllUserPostActions from 'app/actions/getAllUserPostActions';

export const reducerStates = (state) => {
    return {
      data: state.getUserPostDataReducer.data
    };
};


//Our worker Saga that rates a movie
export default function* myHomeUnlikeAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(getAllUserPostActions.enableLoader());
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
            yield put(myHomeUnLikeActions.unLikeMyHomeResponse(loginState.data));
        }
        yield put(getAllUserPostActions.disableLoader());

    } catch (error) {
        yield put(myHomeUnLikeActions.unLikeMyHomeFailed({}));
        yield put(getAllUserPostActions.disableLoader());

    }
}
