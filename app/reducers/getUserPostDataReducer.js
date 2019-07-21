/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const getUserPostDataReducer = createReducer(initialState, {
    [types.GET_ALL_USER_ADDED_POST_REQUEST](state) {        
        return {...state};
    },
  
    [types.GET_ALL_USER_ADDED_POST_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response
        };
    },
    [types.GET_ALL_USER_ADDED_POST_FAILED](state) {
        return { ...state };
    }
});
