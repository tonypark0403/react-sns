import * as actionTypes from "./userActionTypes";

export const loginAction = id => ({
  type: actionTypes.LOG_IN,
  data: {
    nickname: id
  }
});

export const logoutAction = {
  type: actionTypes.LOG_OUT
};
