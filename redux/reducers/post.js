import { ADD_POST, ADD_DUMMY } from "../actions/post/postActionTypes";

const initialState = {
  mainPosts: []
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return { ...state };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      };
    }
    default: {
      return state;
    }
  }
};

export default post;
