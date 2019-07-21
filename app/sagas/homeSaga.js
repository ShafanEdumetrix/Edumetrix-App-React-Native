
import { put, call, select } from "redux-saga/effects";
import * as homeActions from "app/actions/homeActions";
import home from "app/api/methods/home";

export const reducerStates = state => {
  return {
    data: state.homeReducer.data
  };
};

//Our worker Saga that rates a movie
export default function* homeAsync(action) {
  let loginState = yield select(reducerStates);

  yield put(homeActions.enableLoader());
  try {
    const response = yield call(home, action.token, action.page);

    if (response.status == 200) {
      let newHomeFeed = [...loginState.data, ...response.newsfeeds];
      yield put(homeActions.onHomeResponse(newHomeFeed));
    }
    yield put(homeActions.disableLoader({}));
  } catch (error) {
    yield put(homeActions.homeFailed({}));
    yield put(homeActions.disableLoader({}));
  }
}