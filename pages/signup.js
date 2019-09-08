import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import Head from "next/head";
import { Input, Checkbox, Button, Form } from "antd";

const SignUp = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);

  const onChangeId = e => {
    const { value } = e.target;
    setId(value);
  };

  const onChangeNick = e => {
    const { value } = e.target;
    setId(value);
  };

  const onChangePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const onChangePasswordCheck = e => {
    const { value } = e.target;
    setPasswordCheck(value);
  };

  const onChangeTerm = e => {
    const { checked } = e.target;
    setTerm(checked);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
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
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              I have agreed all above.
            </Checkbox>
          </div>
          <div>
            <Button type="primary">Register</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
