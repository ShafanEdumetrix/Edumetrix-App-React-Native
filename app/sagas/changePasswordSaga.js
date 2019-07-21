import { put, call } from 'redux-saga/effects';
import * as changePasswordActions from 'app/actions/changePasswordActions';
import changePassword from 'app/api/methods/changePassword';
import Snackbar from 'react-native-snackbar';

//Our worker Saga that rates a movie
export default function* changePasswordAsync(action) {
    try {
        const response = yield call(
            changePassword,
            action.token,
            action.old_password,
            action.password
        );        
        
        if (response.status == 200) {
            yield put(changePasswordActions.changePasswordResponse(response));
        }
        Snackbar.show({
            title: response.message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });  
    } catch (error) {
        
        yield put(changePasswordActions.changePasswordFailed({}));

    }
}
