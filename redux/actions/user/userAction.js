import * as actionTypes from "./userActionTypes";

export const loginAction = {
  type: actionTypes.LOG_IN,
  data: {
    nickname: "dream"
  }
};

export const logoutAction = {
  type: actionTypes.LOG_OUT
};
