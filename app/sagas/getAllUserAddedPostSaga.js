import { put, call } from 'redux-saga/effects';
import * as getAllUserPostActions from 'app/actions/getAllUserPostActions';
import getUserPost from 'app/api/methods/getUserPost';

export const reducerStates = () => {
    return {
        
    };
};

//Our worker Saga that rates a movie
export default function* getAllUserAddedPostAsync(action) {
    yield put(getAllUserPostActions.enableLoader());
    try {
        const response = yield call(
            getUserPost,
            action.token
        );
        
        if (response.status == 200) {
            yield put(getAllUserPostActions.onRequestResponse(response.my_newsfeeds));
            yield put(getAllUserPostActions.disableLoader());
        }
    } catch (error) {
        yield put(getAllUserPostActions.requestFailed({}));
        yield put(getAllUserPostActions.disableLoader());
    }
}
 