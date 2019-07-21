/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const suggestionsListReducer = createReducer(initialState, {
    [types.SUGGESTIONS_LIST_REQUEST](state) {        
        return {...state};
    },
  
    [types.SUGGESTIONS_LIST_RESPONSE](state, action) {        
        return {
            ...state,
            data: action.response
        };
    },
    [types.SUGGESTIONS_LIST_FAILED](state) {
        return { ...state };
    },
    
});
