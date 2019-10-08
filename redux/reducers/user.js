import { LOG_IN, LOG_OUT } from "../actions/user/userActionTypes";

const dummyUser = {
  photo:
    "https://i.pinimg.com/564x/ac/b0/f6/acb0f641af4e6981e0537d2363006eec.jpg",
  nickname: "Tony",
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

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
    default: {
      return state;
    }
  }
};

export default user;
