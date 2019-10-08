import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Checkbox, Button, Form } from "antd";
import TextInput from "../components/input/TextInput";
import { useInput } from "../components/custom-hook/UseInput";
import { signupAction } from "../redux/reducers/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  //custom-hook
  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onChangePasswordCheck = useCallback(
    e => {
      const { value } = e.target;
      setPasswordError(value !== password);
      setPasswordCheck(value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    const { checked } = e.target;
    setTerm(checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(
    e => {
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
      dispatch(
        signupAction({
          id,
          nick,
          password
        })
      );
    },
    [password, passwordCheck, term]
  ); //useCallback은 states들도 dependencies array에 넣어야함

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          {/* <Input name="user-id" value={id} required onChange={onChangeId} /> */}
          <TextInput value={id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">Nickname</label>
          <br />
          {/* <Input name="user-nick" value={nick} required onChange={onChangeNick} /> */}
          <TextInput value={nick} onChange={onChangeNick} />
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
    </>
  );
};

export default SignUp;
