import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar } from "antd";

const UserProfile = ({ User, Post, Followings, Followers }) => {
  const { photo, nickname } = User;
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
    </Card>
  );
};

UserProfile.propTypes = {
  User: PropTypes.object,
  Post: PropTypes.array,
  Followings: PropTypes.array,
  Followers: PropTypes.array
};

export default UserProfile;
