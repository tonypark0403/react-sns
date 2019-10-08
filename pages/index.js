import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostForm from "../components/PostForm";
import PostCardList from "../components/PostCardList";
import { loginAction, logoutAction } from "../redux/reducers/user";

const Home = () => {
  //store에 state는 useSelector를 이용
  const { isLoggedIn, user } = useSelector(state => state.user); // state는 rootReducer에 state
  const { mainPosts } = useSelector(state => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loginAction); //, dispatch(logoutAction), dispatch(loginAction);
  }, []); //dependency array에 아무것도 없으면 componentDidMount랑 같음

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
