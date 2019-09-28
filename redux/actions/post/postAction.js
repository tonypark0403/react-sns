import * as actionTypes from "./postActionTypes";

export const addPost = {
  type: actionTypes.ADD_POST
};

export const addDummy = {
  type: actionTypes.addDummy,
  data: {
    content: "Hello",
    userId: 1,
    user: {
      nickname: "dream"
    }
  }
};
