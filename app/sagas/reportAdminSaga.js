import { put, call } from 'redux-saga/effects';
import * as reportAdminActions from 'app/actions/reportAdminActions';
import reportAdmin from 'app/api/methods/reportAdmin'; 
import Snackbar from 'react-native-snackbar';

//Our worker Saga that rates a movie
export default function* reportAdminAsync(action) {
    try {
        const response = yield call(
            reportAdmin,
            action.token,
            action.post_id
        );        
        if (response.status == 200) {
            yield put(reportAdminActions.onReportResponse(response));
        }
        Snackbar.show({
            title: "You Have Reported To Admin",
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });
    } catch (error) {
        yield put(reportAdminActions.reportFailed({}));

    }
}
