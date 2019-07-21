import { put, call } from 'redux-saga/effects';
import * as getChatListActions from 'app/actions/getChatListActions';
import getChatList from 'app/api/methods/getChatList';

//Our worker Saga that rates a movie
export default function* getChatListAsync(action) {
    yield put(getChatListActions.enableLoader());
    try {
        const response = yield call(
            getChatList,
            action.token
        );
        
        if (response.status == 200) {            
            yield put(getChatListActions.onChatListResponse(response.chats));
            yield put(getChatListActions.disableLoader({}));

        }
    } catch (error) {
        yield put(getChatListActions.chatListFailed({}));
        yield put(getChatListActions.disableLoader({}));
    }
}
 