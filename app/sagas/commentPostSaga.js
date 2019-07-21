
import { put, call } from 'redux-saga/effects';
import commentPost from 'app/api/methods/commentPost';
import * as commentPostActions from 'app/actions/commentPostActions';

// Our worker Saga that logins the user
export default function* commentPostAsync(action) {
    try {
        const response = yield call(
            commentPost, action.token, action.post_id,action.comment
        );

    if (response.status == 200) {
        yield put(commentPostActions.onCommentResponse(response));
        yield put(commentPostActions.onCommentSucess({ token: action.token, post_id: action.post_id }));
    } 
   
}
    catch (error) {        
        yield put(commentPostActions.commentFailed());
    }
}
      