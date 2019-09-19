import React from "react";
import PostForm from "../components/PostForm";
import PostCardList from "../components/PostCardList";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
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
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm imagePaths={dummy.imagePaths} />}
      <PostCardList mainPosts={dummy.mainPosts} />
    </div>
  );
};

export default Home;
