import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import Head from "next/head";
import { Input, Checkbox, Button, Form } from "antd";

const SignUp = () => {
  const useInput = (initValue = null) => {
    const [value, setValue] = useState(initValue);
    const eventHandler = e => {
      const { name, value } = e.target;
      setValue(value);
      if (name === "user-password-check") {
        setPasswordError(value !== password);
      }
    };
    return [value, eventHandler];
  };

  const onChangeTerm = e => {
    const { checked } = e.target;
    setTerm(checked);
    setTermError(false);
  };

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log("Submitted data : ", {
      id,
      nick,
      password,
      passwordCheck,
      term
    });
  };

  return (
    <>
      <Head>
        <title>Tony-sns</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">ID</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">Nickname</label>
            <br />
            <Input
              name="user-nick"
              value={nick}
              required
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label htmlFor="user-pass">Password</label>
            <br />
            <Input
              name="user-pass"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">Re-Password</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}> Please match the password!</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              I have agreed all above.
            </Checkbox>
            {termError && (
              <div style={{ color: "red" }}> Please check the agreement!</div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
