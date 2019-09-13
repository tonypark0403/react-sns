import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col, Card, Avatar } from "antd";
import PropTypes from "prop-types";

const dummy = {
  User: {
    photo:
      "https://i.pinimg.com/564x/ac/b0/f6/acb0f641af4e6981e0537d2363006eec.jpg",
    nickname: "Tony"
  },
  Post: [],
  Followings: [],
  Followers: []
};

const AppLayout = ({ children }) => {
  const {
    User: { photo, nickname },
    Post,
    Followings,
    Followers
  } = dummy;
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home" style={{ fontWeight: 600 }}>
          <Link href="/">
            <a>TonySNS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup">
        <Button>Sign Up</Button>
      </Link>
      <Row>
        <Col xs={24} md={6}>
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
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          Third
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
