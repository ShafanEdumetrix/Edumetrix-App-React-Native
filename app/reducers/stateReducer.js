/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const stateReducer = createReducer(initialState, {
    [types.GET_STATES_REQUEST](state) {        
        return {...state};
    },
  
    [types.GET_STATES_RESPONSE](state, action) {        
        return {
            ...state,
            data: action.response
        };
    },
    [types.GET_STATES_FAILED](state) {
        return { ...state };
    },
    
});
