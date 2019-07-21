import { put, call } from 'redux-saga/effects';
import * as forgotPasswordActions from 'app/actions/forgotPasswordActions';
import forgotPassword from 'app/api/methods/forgotPassword';
import * as navigationActions from 'app/actions/navigationActions';

//Our worker Saga that rates a movie
export default function* forgotPasswordAsync(action) {
    try {
        const response = yield call(
            forgotPassword,
            action.email
        );
        if (response.status == 200) {
            
            yield put(forgotPasswordActions.onPasswordResponse(response));
            yield call(navigationActions.navigateToLogin);
        }
        else
        alert(response.message)
    } catch (error) {
        yield put(forgotPasswordActions.passwordFailed({}));
    }
}
  