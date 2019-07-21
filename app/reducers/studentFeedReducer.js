/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data:''
};

export const studentFeedReducer = createReducer(initialState, {
    [types.STUDENT_FEED_REQUEST](state) {        
        return {...state};
    },
  
    [types.STUDENT_FEED_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response
        };
    },
    [types.STUDENT_FEED_FAILED](state) {
        return { ...state };
    }
});
 