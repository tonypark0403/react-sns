import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";
function loginAPI() {}

function* login() {
  try {
    yield call(loginAPI); // in the case of LOG_IN, request to server wih loginAPI
    yield put({
      // put is the same as dispatch
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    // when fail for loginAPI
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login); // wait for LOG_IN action
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
