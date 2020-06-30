import React from "react";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import {Container, Input, LoginButton, LoginForm, LoginFormTitle} from "./components/LoginForm"

export default function Login() {
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");

  async function login(evt) {
    evt.preventDefault();
    const token = await axios.post("http://localhost:8000/api/user/token/",
      {email: email, password: password}
    );
    // STORE INTO CONTEXT
    // REDIRECT TO HOME
  }

  return (
    <Container className="Login">
      <LoginForm>
        <LoginFormTitle>Login</LoginFormTitle>
        <Input type="input" value={email} name="email" onChange={handleEmailChange}/>
        <Input type="password" value={password} name="password" onChange={handlePasswordChange}/>
        <LoginButton handleClick={login} primary>login</LoginButton>
      </LoginForm>
    </Container>
  );
};