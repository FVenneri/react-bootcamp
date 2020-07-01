import React, {useContext} from "react";
import useInputState from "./hooks/useInputState";
import axios from "axios";
import {Container, Form, FormTitle, Input, SubmitButton} from "./components/Form"
import {AuthContext} from "./contexts/AuthenticationProvider";
import {Link} from "react-router-dom";

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
      <Form>
        <FormTitle>Login</FormTitle>
        <Input type="text" value={email} name="email" onChange={handleEmailChange}/>
        <Input type="password" value={password} name="password" onChange={handlePasswordChange}/>
        <SubmitButton handleClick={handleLogin} primary name="loginButton">login</SubmitButton>
        <Link to="/app/register">You don't have an account? Register it.</Link>
      </Form>
    </Container>
  );
};