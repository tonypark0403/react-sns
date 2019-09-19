import React from "react";
import { Form, Input, Button } from "antd";

const NicknameEditForm = () => {
  return (
    <Form
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        border: "1px solid #d9d9d9",
        padding: "20px"
      }}
    >
      <Input addonBefore="Nickname" />
      <Button type="primary" style={{ marginTop: "10px" }}>
        Update
      </Button>
    </Form>
  );
};

export default NicknameEditForm;
