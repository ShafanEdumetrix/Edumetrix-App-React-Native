/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAllSuggestions(token) {
    return {
        type: types.SUGGESTIONS_LIST_REQUEST,
        token
    };
}

export function suggestionsFailed() {
    return {
        type: types.SUGGESTIONS_LIST_FAILED
    };
}

export function suggestionsResponse(response) {
    return {
        type: types.SUGGESTIONS_LIST_RESPONSE,
        response
    };
}
