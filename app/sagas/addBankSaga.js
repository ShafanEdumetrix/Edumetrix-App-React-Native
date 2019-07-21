import { put, call } from 'redux-saga/effects';
import * as addBankDetails from 'app/actions/addBankDetails';
import addBank from 'app/api/methods/addBank';


//Our worker Saga that rates a movie
export default function* addBankAsync(action) {
    try {
        const response = yield call(
            addBank,
            action.token,
            action.bank_name,
            action.branch,
            action.ifsc_code,
            action.account_no,
            action.account_holder_name
        );
        
        if (response.status == 200) {
            yield put(addBankDetails.addBankResponse(response));
        }
    } catch (error) {
        yield put(addBankDetails.addBankFailed({}));

    }
}
