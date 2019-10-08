import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);
  return (
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
        {imagePaths.map((v, i) => {
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
  );
};

PostForm.propTypes = {
  imagePaths: PropTypes.array
};
export default PostForm;
