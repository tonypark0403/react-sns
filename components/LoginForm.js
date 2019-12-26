import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useInput } from "./custom-hook/UseInput";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log({
        id,
        password
      });
      dispatch(loginAction(id));
    },
    [id, password]
  );
  return (
    <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="primary" htmlType="submit" loading={false}>
          Sign In
        </Button>
        <Link href="/signup">
          <a>
            <Button>Sign Up</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
