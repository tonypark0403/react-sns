import React, { memo } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

const TextInput = memo(({ value, onChange }) => {
  return <Input name="user-id" value={value} required onChange={onChange} />;
});

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
