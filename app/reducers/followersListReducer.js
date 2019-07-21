/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const followersListReducer = createReducer(initialState, {
    [types.FOLLOWERS_LIST_REQUEST](state) {        
        return {...state};
    },
  
    [types.FOLLOWERS_LIST_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response
        };
    },
    [types.FOLLOWERS_LIST_FAILED](state) {
        return { ...state };
    }
});
