import React from "react";
import { Card, Icon, Avatar, Button } from "antd";
import PropTypes from "prop-types";

const PostCard = ({ User, content, img, createdAt }) => {
  const { photo, nickname } = User;
  return (
    <Card
      key={createdAt}
      cover={img && <img alt="example" src={img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={
          <Avatar src={photo} style={{ backgroundColor: "#87d068" }}>
            {nickname[0].toUpperCase}
          </Avatar>
        }
        title={nickname}
        description={content}
      />
    </Card>
  );
};

PostCard.propTypes = {
  User: PropTypes.shape({
    photo: PropTypes.string,
    nickname: PropTypes.string
  }),
  content: PropTypes.string,
  img: PropTypes.string,
  createdAt: PropTypes.string
};
export default PostCard;
