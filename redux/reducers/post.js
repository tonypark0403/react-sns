import { ADD_POST, ADD_DUMMY } from "../actions/post/postActionTypes";

const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        photo:
          "https://i.pinimg.com/564x/ac/b0/f6/acb0f641af4e6981e0537d2363006eec.jpg",
        nickname: "Tony"
      },
      content: "Welcome to my Blog",
      img:
        "https://i.pinimg.com/564x/82/de/0e/82de0e9e5e08d3b5995f6e0af62e9c1e.jpg",
      createdAt: new Date()
    }
  ],
  imagePaths: []
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
