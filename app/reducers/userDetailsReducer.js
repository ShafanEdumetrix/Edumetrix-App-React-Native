/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const userDetailsReducer = createReducer(initialState, {
    [types.USER_DETAILS_REQUEST](state) {        
        return {...state};
    },
  
    [types.USER_DETAILS_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response
        };
    },
    [types.USER_DETAILS_FAILED](state) {
        return { ...state };
    },
    [types.EDIT_PROFILE_UPDATE](state,action){
        return {
            ...state,
            data: action.response,
        };
    }
});
