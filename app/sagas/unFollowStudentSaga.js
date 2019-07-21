import { put, call, select } from 'redux-saga/effects';
import * as unfollowStudentActions from 'app/actions/unfollowStudentActions';
import unFollowStudent from 'app/api/methods/unFollowStudent';
import Snackbar from 'react-native-snackbar';
import * as getAllStudentActions from 'app/actions/getAllStudentActions';

export const reducerStates = state => {
    return {
        token: state.loginReducer.token,
        data: state.getStudentsReducer.data
    };
};

//Our worker Saga that rates a movie
export default function* unFollowStudentAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(getAllStudentActions.enableLoader());
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
            yield put(unfollowStudentActions.unFollowStudentResponse(loginState.data));
            yield put(unfollowStudentActions.unFollowStudentSucess({token:action.token,follow_studentuser_id:action.follow_studentuser_id}));
        }
        Snackbar.show({
            title: response.message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });  
            yield put(getAllStudentActions.disableLoader());
    } catch (error) {
        yield put(unfollowStudentActions.unFollowStudentFailed({}));
        yield put(getAllStudentActions.disableLoader());
    }
}
 