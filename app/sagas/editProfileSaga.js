
import { put, call } from 'redux-saga/effects';
import editProfile from 'app/api/methods/editProfile';
import * as editProfileActions from 'app/actions/editProfileActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* editProfileAsync(action) {
    const { params } = action;
    const formData = new FormData();
    Object.keys(params).map(item => {
        console.log("vhgvnvb",params[item].uri);
        
        if(item === 'student_photo' || item === 'student_idfront' || item === 'student_idback') {
            let fileExtension = params[item].uri;
            // .split(".").pop();
            let fileName = params[item].uri;
            // .split("/").pop();
            formData.append(item, {
                name: fileName,
                uri: params[item].uri,
                type: fileExtension
            });
        } else {
            formData.append(item, params[item])
        }
    });
    yield put(editProfileActions.enableLoader());
    try {
        const response = yield call(
            editProfile, formData
        );
    if (response.status == 200) {
        yield put(editProfileActions.onEditProfile( response));
        yield put(editProfileActions.disableLoader());
        yield call(navigationActions.navigateToHomeScreen);
    } 
}
    catch (error) {      
        yield put(editProfileActions.disableLoader());
    }
}
     