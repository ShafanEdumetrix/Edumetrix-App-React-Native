
import { put, call,select } from 'redux-saga/effects';
import deletePost from 'app/api/methods/deletePost';
import * as deleteHomePostActions from 'app/actions/deleteHomePostActions';
import Snackbar from 'react-native-snackbar';
import * as homeActions from 'app/actions/homeActions';
import home from "app/api/methods/home";

export const reducerStates = (state) => {
    return {
        token: state.loginReducer.token,
      data: state.homeReducer.data
    };
};


// Our worker Saga that logins the user
export default function* deleteHomePostAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(homeActions.enableLoader());
    try {
        const response = yield call(deletePost, action.token, action.post_id);
        if (response.status == 200) {
            yield put(deleteHomePostActions.deleteHomePostResponse(response));
            const responseList = yield call(home, loginState.token, 0);
            if (responseList) {
              let newResponseList = [...responseList.newsfeeds, ...loginState.data];
              yield put(homeActions.onHomeResponse(newResponseList));
            }
          }
        yield put(homeActions.disableLoader());

   
    Snackbar.show({
        title: "You Have Deleted The Post Sucessfully",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: "grey"
        });  
}
    catch (error) {       
        yield put(deleteHomePostActions.deleteHomePostFailed());
        yield put(homeActions.disableLoader());

    }
}
        