import * as actionTypes from "./userActionTypes";

//id를 이용한 동적데이타 => 함수처리
export const loginAction = id => ({
  type: actionTypes.LOG_IN,
  data: {
    nickname: id
  }
});

export const logoutAction = {
  type: actionTypes.LOG_OUT
};

//동적데이타들은 위와 같이 함수처리 해줘야 함
export const signupAction = data => ({
  type: actionTypes.SIGN_UP,
  data
});
