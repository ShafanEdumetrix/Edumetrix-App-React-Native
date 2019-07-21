/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const getEarningsListReducer = createReducer(initialState, {
    [types.GET_EARNINGS_LIST_REQUEST](state) {        
        return {...state};
    },
  
    [types.GET_EARNINGS_LIST_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response
        };
    },
    [types.GET_EARNINGS_LIST__FAILED](state) {
        return { ...state };
    }
});
