import { put, call } from 'redux-saga/effects';
import * as getAllPaymentActions from 'app/actions/getAllPaymentActions';
import getAllPayment from 'app/api/methods/getAllPayment'; 

//Our worker Saga that rates a movie
export default function* getAllPaymentAsync(action) {
    try {
        const response = yield call(
            getAllPayment,
            action.token
        );           
        if (response.status == 200) {
            yield put(getAllPaymentActions.allPaymentResponse(response.payment_requests));
        }
    } catch (error) {
        yield put(getAllPaymentActions.allPaymentFailed({}));

    }
}
