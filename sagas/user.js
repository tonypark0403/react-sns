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

function* watchLogin() {
  // yield takeLatest(LOG_IN, login); // wait for LOG_IN action
  yield take(LOG_IN);
  // put is dispatch for redux
  yield put({
    type: LOG_IN_SUCCESS
  });
}

// TODO
function* watchSignUp() {}

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

function* watchHello() {
  console.log("before saga");
  // while (true) {
  //   yield take("HELLO_SAGA", hello);
  //   console.log("hello saga");
  // }
  for (let i = 0; i < 5; i++) {
    yield take("HELLO_SAGA");
    console.log("hello saga");
  }
}

export default function* userSaga() {
  yield all([watchHello(), watchLogin(), watchSignUp()]); // 여러개 이벤트를 등록해야할 경우 all로 묶어줌
}
