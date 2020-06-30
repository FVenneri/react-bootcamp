import React, {useContext} from "react";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import {Container, Input, LoginButton, LoginForm, LoginFormTitle} from "./components/LoginForm"
import {AuthContext} from "./contexts/AuthenticationProvider";

export default function Login() {
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  const {login} = useContext(AuthContext);

  async function handleLogin(evt) {
    evt.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user/token/",
        {email: email, password: password}
      );
      if (response.status === 200)
        login(response.token);
    } catch (e) {
      console.log("Login failed"); //FIXME message to user?
    }
  }

  return (
    <Container className="Login">
      <LoginForm>
        <LoginFormTitle>Login</LoginFormTitle>
        <Input type="text" value={email} name="email" onChange={handleEmailChange}/>
        <Input type="password" value={password} name="password" onChange={handlePasswordChange}/>
        <LoginButton handleClick={handleLogin} primary name="loginButton">login</LoginButton>
      </LoginForm>
    </Container>
  );
};