const dummyUser = {
  photo:
    "https://i.pinimg.com/564x/ac/b0/f6/acb0f641af4e6981e0537d2363006eec.jpg",
  nickname: "Tony",
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {}
};

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const loginAction = id => ({
  type: LOG_IN,
  data: {
    nickname: id
  }
});

export const logoutAction = {
  type: LOG_OUT
};

export const signupAction = data => ({
  type: SIGN_UP,
  data
});

const initialState = {
  isLoggedIn: false,
  user: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: { ...dummyUser, ...action.data }
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data
      };
    }
    default: {
      return state;
    }
  }
};

export default user;
