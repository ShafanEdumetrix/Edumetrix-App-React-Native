import { put, call } from 'redux-saga/effects';
import * as requestPaymentActions from 'app/actions/requestPaymentActions';
import requestPayment from 'app/api/methods/requestPayment'; 

//Our worker Saga that rates a movie
export default function* requestPaymentAsync(action) {
    try {
        const response = yield call(
            requestPayment,
            action.token,
            action.amount
        );        
        if (response.status == 200) {
            yield put(requestPaymentActions.paymentResponse(response));
            alert(response.message)
        }
        else{
            alert(response.message)
        }
    } catch (error) {
        yield put(requestPaymentActions.paymentFailed({}));

    }
}
