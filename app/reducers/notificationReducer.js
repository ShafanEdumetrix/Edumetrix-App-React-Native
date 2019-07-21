
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const notificationReducer = createReducer(initialState, {
    [types.GET_NOTIFICATION_REQUEST](state) {        
        return {...state};
    },
  
    [types.GET_NOTIFICATION_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response
        };
    },
    [types.GET_NOTIFICATION_FAILED](state) {
        return { ...state };
    }
});
