import { put, call,select } from 'redux-saga/effects';
import * as followActions from 'app/actions/followActions';
import followStudent from 'app/api/methods/followStudent';
import Snackbar from 'react-native-snackbar';
import * as followersListActions from 'app/actions/followersListActions';

export const reducerStates = state => {
    return {
        token: state.loginReducer.token,
        data: state.followersListReducer.data
    };
};

//Our worker Saga that rates a movie
export default function* followAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(followersListActions.enableLoader());
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
            yield put(followActions.followResponse(loginState.data));
            yield put(followActions.followSucess({token:action.token,follow_studentuser_id:action.follow_studentuser_id}));
        }
        Snackbar.show({
            title: response.message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: "grey"
            });  
            yield put(followersListActions.disableLoader());
    } catch (error) {
        yield put(followActions.followFailed({}));
        yield put(followersListActions.disableLoader());
    }
}
