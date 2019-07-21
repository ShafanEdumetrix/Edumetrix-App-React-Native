/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const allPaymentReducer = createReducer(initialState, {
    [types.ALL_PAYMENT_REQUEST](state) {        
        return {...state};
    },
  
    [types.ALL_PAYMENT_RESPONSE](state, action) {        
        return {
            ...state,
            data: action.response
        };
    },
    [types.ALL_PAYMENT_FAILED](state) {
        return { ...state };
    },
    
});
