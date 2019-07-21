import { put, call } from 'redux-saga/effects';
import * as getChatDetailActions from 'app/actions/getChatDetailActions';
import getChatDetail from 'app/api/methods/getChatDetail';

//Our worker Saga that rates a movie
export default function* getChatDetailAsync(action) {
    yield put(getChatDetailActions.enableLoader());
    try {
        const response = yield call(
            getChatDetail,
            action.token,
            action.receiver_id
        );        
        if (response.status == 200) {                        
            yield put(getChatDetailActions.chatDetailResponse(response.chats));
            yield put(getChatDetailActions.disableLoader({}));

        }
    } catch (error) {
        yield put(getChatDetailActions.chatDetailFailed({}));
        yield put(getChatDetailActions.disableLoader({}));
    }
}
 