
import { put, call } from 'redux-saga/effects';
import deletePost from 'app/api/methods/deletePost';
import * as deletePostActions from 'app/actions/deletePostActions';
import Snackbar from 'react-native-snackbar';

// Our worker Saga that logins the user
export default function* deletePostAsync(action) {
    try {
        const response = yield call(
            deletePost, action.token, action.post_id
        );

    if (response.status == 200) {
        yield put(deletePostActions.deletePostResponse(response));
        yield put(deletePostActions.onDeleteSucess({ token: action.token }));
    } 
    Snackbar.show({
        title: "You Have Deleted The Post Sucessfully",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: "grey"
        });  
}
    catch (error) {        
        yield put(deletePostActions.deletePostFailed());
    }
}
        