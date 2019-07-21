import { put, call,select } from 'redux-saga/effects';
import * as followStudentActions from 'app/actions/followStudentActions';
import followStudent from 'app/api/methods/followStudent';
import Snackbar from 'react-native-snackbar';
import * as getAllStudentActions from 'app/actions/getAllStudentActions';

export const reducerStates = state => {
    return {
        token: state.loginReducer.token,
        data: state.getStudentsReducer.data
    };
};

//Our worker Saga that rates a movie
export default function* followStudentAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(getAllStudentActions.enableLoader());
    try {
        const response = yield call(
            followStudent,
            action.token,
            action.follow_studentuser_id,
            action.item,
            action.index
        );
        let index = action.index;
        let item = action.item;
        let editedData = loginState.data[index];
        editedData.follow_flag = 1;
        loginState.data[index] = editedData;

        if (response.status == 200) {
            yield put(followStudentActions.followStudentResponse(loginState.data));
            yield put(followStudentActions.followStudentSucess({token:action.token,follow_studentuser_id:action.follow_studentuser_id}));
        }
        Snackbar.show({
            title: response.message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });  
            yield put(getAllStudentActions.disableLoader());
    } catch (error) {
        yield put(followStudentActions.followStudentFailed({}));
        yield put(getAllStudentActions.disableLoader());
    }
}
