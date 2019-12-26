import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Avatar, Button } from "antd";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const { photo, nickname, Post, Followings, Followers } = user;
  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []); // in case of sending to child component
  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />
          {Post.length}
        </div>,
        <div key="following">
          Following
          <br />
          {Followings.length}
        </div>,
        <div key="follower">
          Follower
          <br />
          {Followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src={photo} style={{ backgroundColor: "#87d068" }}>
            {nickname[0].toUpperCase}
          </Avatar>
        }
        title={nickname}
      />
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

UserProfile.propTypes = {
  nickname: PropTypes.string,
  photo: PropTypes.string,
  Post: PropTypes.array,
  Followings: PropTypes.array,
  Followers: PropTypes.array
};

export default UserProfile;
