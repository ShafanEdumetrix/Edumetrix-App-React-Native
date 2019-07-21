import { put, call } from 'redux-saga/effects';
import * as suggestionsListActions from 'app/actions/suggestionsListActions';
import suggestionsList from 'app/api/methods/suggestionsList';

//Our worker Saga that rates a movie
export default function* suggestionsListActionsAsync(action) {
    try {
        const response = yield call(
            suggestionsList,
            action.token
        );

        if (response.status == 200) {
            yield put(suggestionsListActions.suggestionsResponse(response.suggestions));
        }
    } catch (error) {
        yield put(suggestionsListActions.suggestionsFailed({}));
    }
}
