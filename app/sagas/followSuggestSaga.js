import { put, call,select } from 'redux-saga/effects';
import * as followSuggestActions from 'app/actions/followSuggestActions';
import followStudent from 'app/api/methods/followStudent';
import Snackbar from 'react-native-snackbar';

//Our worker Saga that rates a movie
export default function* followSuggestAsync(action) {
    try {
        const response = yield call(
            followStudent,
            action.token,
            action.follow_studentuser_id,
            action.item,
            action.index
        );
        if (response.status == 200) {
            yield put(followSuggestActions.followSuggestResponse(response));
        }
        Snackbar.show({
            title: response.message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });  
    } catch (error) {
        yield put(followSuggestActions.followSuggestFailed({}));
    }
}
