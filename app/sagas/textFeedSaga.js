import { put, call, select } from "redux-saga/effects";
import * as textFeedActions from "app/actions/textFeedActions";
import textFeed from "app/api/methods/textFeed";
import * as homeActions from "app/actions/homeActions";
import home from "app/api/methods/home";

export const reducerStates = state => {
  return {
    token: state.loginReducer.token,
    data: state.homeReducer.data
  };
};

//Our worker Saga that rates a movie
export default function* textFeedAsync(action) {
  let loginState = yield select(reducerStates);
  const { params } = action;
  const formData = new FormData();
  Object.keys(params).map(item => {
    formData.append(item, params[item]);
  });
  yield put(homeActions.enableLoader());
  try {
    const response = yield call(textFeed, formData);

    if (response.status == 200) {
      yield put(textFeedActions.textFeedResponse(response));
      const responseList = yield call(home, loginState.token, 0);
      if (responseList) {
        let newResponseList = [...responseList.newsfeeds, ...loginState.data];
        yield put(homeActions.onHomeResponse(newResponseList));
      }
    }
    yield put(homeActions.disableLoader());

  } catch (error) {
    yield put(textFeedActions.textFeedFailed({}));
    yield put(homeActions.disableLoader());

  }
}
 