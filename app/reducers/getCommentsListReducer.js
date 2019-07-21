/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const getCommentsListReducer = createReducer(initialState, {
    [types.GET_COMMENTS_REQUEST](state) {        
        return {...state};
    },
  
    [types.GET_COMMENTS_RESPONSE](state, action) {
        return {
            ...state,
            data: [...action.response]
        };
    },
    [types.GET_COMMENTS_FAILED](state) {
        return { ...state };
    }
});
