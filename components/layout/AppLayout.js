import React from "react";
import { Menu, Input } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home" style={{ fontWeight: 600 }}>
          TonySNS
        </Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
