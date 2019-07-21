import { put, call } from 'redux-saga/effects';
import * as getCountryActions from 'app/actions/getCountryActions';
import getCountry from 'app/api/methods/getCountry';

//Our worker Saga that rates a movie
export default function* getCountryAsync() {
    try {
        const response = yield call(
            getCountry        );
        
        if (response.status == 200) {
            yield put(getCountryActions.countryResponse(response.countries));
        }
    } catch (error) {
        yield put(getCountryActions.requestCountryFailed({}));
    }
}
  