import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostForm from "../components/PostForm";
import PostCardList from "../components/PostCardList";
import { loginAction, logoutAction } from "../reducers/user";

const Home = () => {
  const { isLoggedIn, user } = useSelector(state => state.user); // state from rootReducer
  const { mainPosts } = useSelector(state => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loginAction); //, dispatch(logoutAction), dispatch(loginAction);
  }, []); //empty dependency array means componentDidMount

  return (
    <div>
      {user ? (
        <div>{user.nickname} is log In successfully!!!</div>
      ) : (
        <div>Logout</div>
      )}
      {isLoggedIn && <PostForm />}
      <PostCardList mainPosts={mainPosts} />
    </div>
  );
};

export default Home;
