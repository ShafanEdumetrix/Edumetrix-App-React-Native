
import { put, call,select} from 'redux-saga/effects';
import UpdatePost from 'app/api/methods/UpdatePost';
import * as UpdatePostAction from 'app/actions/UpdatePostAction';
import Snackbar from 'react-native-snackbar';
import * as navigationActions from 'app/actions/navigationActions';
import * as homeActions from 'app/actions/homeActions';
import home from "app/api/methods/home";
export const reducerStates = (state) => {
    return {
        token: state.loginReducer.token,
      data: state.homeReducer.data
    };
};
// Our worker Saga that logins the user
export default function* UpdatePostAsync(action) {
    let loginState = yield select(reducerStates);
    const { params } = action;
    const formData = new FormData();
  Object.keys(params).map(item => {
    formData.append(item, params[item]);
  });
  yield put(UpdatePostAction.enableLoader());
    try {
        const response = yield call(UpdatePost,formData);
    if (response.status == 200) {
        yield put(UpdatePostAction.onEditPost(response));
        yield put(UpdatePostAction.onEditPostUpdate({ token: params.token }));
        
        const responseList = yield call(home, loginState.token, 0);
        if (responseList) {
          let newResponseList = [...responseList.newsfeeds, ...loginState.data];
          yield put(homeActions.onHomeResponse(newResponseList));
        }
        Snackbar.show({
          title: "Post updated Sucessfully",
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: "grey"
          }); 
          yield put(UpdatePostAction.disableLoader());
        yield call(navigationActions.navigateToHomeScreen);
    }  
}
    catch (error) {        
        yield put(UpdatePostAction.disableLoader());
    }
}
        