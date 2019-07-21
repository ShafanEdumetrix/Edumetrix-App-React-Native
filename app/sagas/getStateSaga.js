import { put, call } from 'redux-saga/effects';
import * as getStateActions from 'app/actions/getStateActions';
import getState from 'app/api/methods/getState';

//Our worker Saga that rates a movie
export default function* getStateAsync(action) {
    try {
        const response = yield call(
            getState,
            action.country_id
        );
        
        if (response.status == 200) {
            yield put(getStateActions.stateResponse(response.states));
        }
    } catch (error) {
        yield put(getStateActions.getStateFailed({}));
    }
}
  