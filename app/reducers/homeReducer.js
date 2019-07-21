/* Login Reducer
 * handles login states in the app
 */
import createReducer from "app/lib/createReducer";
import * as types from "app/actions/types";

const initialState = {
  data: []
};

export const homeReducer = createReducer(initialState, {
  [types.HOME_REQUEST](state) {
    return { ...state };
  },

  [types.HOME_RESPONSE](state, action) {
    return {
      ...state,
      data: action.response
    };
  },
  [types.HOME_FAILED](state) {
    return { ...state };
  },
  [types.HOME_LIKE_EDITED](state, action) {
    return { ...state };
  }
});