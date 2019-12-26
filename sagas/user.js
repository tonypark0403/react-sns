import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

function loginAPI() {
  // request to server
}

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

// for test
function* hello() {
  try {
    yield put({
      type: "HELLO_TWO"
    });
    console.log("hello");
  } catch (e) {
    console.error(e);
  }
}

function* helloSaga() {
  console.log("before saga");
  while (true) {
    yield take("HELLO_SAGA", hello);
    console.log("hello saga");
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login); // wait for LOG_IN action
}

// export default function* userSaga() {
//   yield all([fork(watchLogin), helloSaga()]);
// }

export default function* userSaga() {
  yield helloSaga();
}
