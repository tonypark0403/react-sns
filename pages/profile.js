import React from "react";
import { Form, Input, Button, List, Card, Icon } from "antd";

const Profile = () => {
  return (
    <div>
      <Form
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          border: "1px solid #d9d9d9",
          padding: "20px"
        }}
      >
        <Input addonBefore="Nickname" />
        <Button type="primary">Update</Button>
      </Form>
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Following List</div>}
        loadMore={<Button style={{ width: "100%" }}>More</Button>}
        bordered
        dataSource={["Tony", "Tutor", "TonySNS"]}
        renderItem={(item, i) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<Icon key={i} type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Follower List</div>}
        loadMore={<Button style={{ width: "100%" }}>More</Button>}
        bordered
        dataSource={["Tony", "Tutor", "TonySNS"]}
        renderItem={(item, i) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<Icon key={i} type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Profile;
