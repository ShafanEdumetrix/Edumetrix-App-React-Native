/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';
import { DrawerActions } from 'react-navigation';

const initialState = {
    token:'',
    students_info:''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state) {
        return {
            ...state
        };
    },
    
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            token: action.response.token,
            students_info:action.response.students_info
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
        };
    },
    [types.REGISTER_TOKEN_UPDATE](state,action){
        return {
            ...state,
            token: action.response.token,
        };
    },
    [types.LOGIN_RESET](state) {
        return {
          ...state,
          token:'',
          students_info:''
        };
      }
});
