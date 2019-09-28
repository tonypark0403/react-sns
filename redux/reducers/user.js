import { LOG_IN, LOG_OUT } from "../actions/user/userActionTypes";

const initialState = {
  isLoggedIn: false,
  user: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { ...state, isLoggedIn: true, user: action.data };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
