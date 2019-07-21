
import { put, call } from 'redux-saga/effects';
import sendMessage from 'app/api/methods/sendMessage';
import * as sendChatActions from 'app/actions/sendChatActions';

// Our worker Saga that logins the user
export default function* sendChatAsync(action) {
    try {
        const response = yield call(
            sendMessage, action.token, action.receiver_id, action.message
        );

    if (response.status == 200) {
        yield put(sendChatActions.onChatResponse( response));
        yield put(sendChatActions.onChatSucess({  token:action.token, receiver_id: action.receiver_id }));
    } 
}
    catch (error) {        
        yield put(sendChatActions.chatFailed());
    }
}
     