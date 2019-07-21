
import { put, call } from 'redux-saga/effects';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    console.log("sdadsdqewqedadas",loginUser, action.username, action.password);

    try {
        const response = yield call(
            loginUser, action.username, action.password
        );

    if (response.status == 200) {
        yield put(loginActions.onLoginResponse( response));
        yield put(loginActions.disableLoader({}));
        yield call(navigationActions.navigateToHomeScreen);
    } 
    else{
    alert(response.message)
    yield put(loginActions.disableLoader({}));
    }
   
}
    catch (error) {        
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
    }
}
     