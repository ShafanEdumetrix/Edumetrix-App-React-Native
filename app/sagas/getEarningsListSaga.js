import { put, call } from 'redux-saga/effects';
import * as getEarningsListActions from 'app/actions/getEarningsListActions';
import getEarningsList from 'app/api/methods/getEarningsList';

export const reducerStates = () => {
    return {
   };
};

//Our worker Saga that rates a movie
export default function* getEarningsListAsync(action) {
    yield put(getEarningsListActions.enableLoader());
    try {
        const response = yield call(
            getEarningsList,
            action.token
        );

        if (response.status == 200) {
            yield put(getEarningsListActions.earningListResponse(response.earnings_info));
        }
        yield put(getEarningsListActions.disableLoader({}));
    } catch (error) {
        yield put(getEarningsListActions.earningListFailed({}));
        yield put(getEarningsListActions.disableLoader({}));

    }
}
