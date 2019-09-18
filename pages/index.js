import React from "react";
import { Input, Form, Button, Card, Icon, Avatar } from "antd";

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
  const { photo, nickname } = dummy.mainPosts[0].User;
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form
          style={{ marginTop: "20px", marginBottom: "20px" }}
          encType="multipart/form-data"
        >
          <Input.TextArea maxLength={140} placeholder="What's new?" />
          <div>
            <Button>Upload</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              Post
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => {
              return (
                <div key={i} style={{ display: "inline-block" }}>
                  <img
                    src={`htp://localhost:3065/${v}`}
                    style={{ width: "200px" }}
                    alt={v}
                  />
                  <div>
                    <Button>Remove</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
      {dummy.mainPosts.map(c => {
        return (
          <Card
            key={c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
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
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
