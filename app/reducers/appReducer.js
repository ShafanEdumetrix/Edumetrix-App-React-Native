/**
 * Created by Jebin Benny
 * on April 29, 2019
 * AppReducer - Handles app states in the app.
 */

import createReducer from "../lib/createReducer";
import * as types from "../actions/types";

const initialState = {
  isNetworkAvailable: false
};

export const appReducer = createReducer(initialState, {
  
  [types.NETWORK_INFO_STATUS](state, action) {
    return {
      ...state,
      isNetworkAvailable: action.status
    };
  }
});
