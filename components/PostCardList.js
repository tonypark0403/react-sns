import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

const PostCardList = ({ mainPosts }) => {
  return mainPosts.map(post => {
    return <PostCard key={+post.createdAt} {...post} />;
  });
};

PostCardList.propTypes = {
  mainPosts: PropTypes.array
};
export default PostCardList;
