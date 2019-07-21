import { put, call, select } from 'redux-saga/effects';
import * as unfollowActions from 'app/actions/unfollowActions';
import unFollowStudent from 'app/api/methods/unFollowStudent';
import Snackbar from 'react-native-snackbar';
import * as followersListActions from 'app/actions/followersListActions';

export const reducerStates = state => {
    return {
        token: state.loginReducer.token,
        data: state.followersListReducer.data
    };
};

//Our worker Saga that rates a movie
export default function* unFollowAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(followersListActions.enableLoader());
    try {
        const response = yield call(
            unFollowStudent,
            action.token,action.follow_studentuser_id
        );
        let index = action.index;
        let item = action.item;
        let editedData = loginState.data[index];
        editedData.follow_flag = 0;
        loginState.data[index] = editedData;
        if (response.status == 200) {
            yield put(unfollowActions.unFollowResponse(loginState.data));
            yield put(unfollowActions.unFollowSucess({token:action.token,follow_studentuser_id:action.follow_studentuser_id}));
        }
        Snackbar.show({
            title: response.message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });  
            yield put(followersListActions.disableLoader());
        } catch (error) {
        yield put(unfollowStudentActions.unFollowFailed({}));
        yield put(followersListActions.disableLoader());
    }
}
  