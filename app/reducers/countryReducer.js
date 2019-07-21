/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const countryReducer = createReducer(initialState, {
    [types.GET_COUNTRIES_REQUEST](state) {        
        return {...state};
    },
  
    [types.GET_COUNTRIES_RESPONSE](state, action) {        
        return {
            ...state,
            data: action.response
        };
    },
    [types.GET_COUNTRIES_FAILED](state) {
        return { ...state };
    },
    
});
