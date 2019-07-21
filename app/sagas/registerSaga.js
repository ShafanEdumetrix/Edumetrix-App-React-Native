
import { put, call } from 'redux-saga/effects';
import register from 'app/api/methods/register';
import * as registerActions from 'app/actions/registerActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* registerAsync(action) {
    const { params } = action;
    const formData = new FormData();
    Object.keys(params).map(item => {
        if(item === 'student_photo' || item === 'student_idfront' || item === 'student_idback') {
            let fileExtension = params[item].uri.split(".").pop();
            let fileName = params[item].uri.split("/").pop();
            formData.append(item, {
                name: fileName,
                uri: params[item].uri,
                type: fileExtension
            });
        } else {
            formData.append(item, params[item])
        }
    });
    yield put(registerActions.enableLoader());
    try {
        const response = yield call(
            register, formData
        );
    if (response.status == 200) {
        yield put(registerActions.onRegisterResponse( response));
        yield put(registerActions.onRegisterTokenUpdate( response));
        yield put(registerActions.disableLoader());
        yield call(navigationActions.navigateToAdminVerificationPendingScreen);
    } 
    else{
        alert(response.message);
        yield put(registerActions.disableLoader());
    }
  
}
    catch (error) {      
        // yield put(registerActions.registerFailed());
        yield put(registerActions.disableLoader());
    }
}
     