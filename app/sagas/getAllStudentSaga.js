import { put, call,select } from 'redux-saga/effects';
import * as getAllStudentActions from 'app/actions/getAllStudentActions';
import getStudent from 'app/api/methods/getStudent';

export const reducerStates = state => {
    return {
      data: state.getStudentsReducer.data
    };
  };

//Our worker Saga that rates a movie
export default function* getAllStudentAsync(action) {
    let loginState = yield select(reducerStates);
    yield put(getAllStudentActions.enableLoader());
    try {
        const response = yield call(
            getStudent,
            action.token,
            action.page
        );

        if (response.status == 200) {
            let newStudentsList = [...loginState.data, ...response.students];
            yield put(getAllStudentActions.getStudentResponse(newStudentsList));
        }
        yield put(getAllStudentActions.disableLoader());
    } catch (error) {
        yield put(getAllStudentActions.getStudentFailed({}));
        yield put(getAllStudentActions.disableLoader());
    }
}
   