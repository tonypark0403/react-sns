import React, { memo } from "react";
import { Input } from "antd";

const TextInput = memo(({ value, onChange }) => {
  return <Input name="user-id" value={value} required onChange={onChange} />;
});

export default TextInput;
