import React from 'react';
import styled from 'styled-components';
import useInputState from "./hooks/useInputState";
import axios from "axios";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const LoginFormTitle = styled.h3`
  font-size: 2em;
`;

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
  width: 20%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  margin: auto;
  padding: 10px;
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.name,
  name: props.name,
  size: "1em",
  onChange: props.onChange
}))`
  color: blue;
  font-size: 1em;
  border: 2px solid blue;
  border-radius: 3px;
  margin: 1em;
  padding: 1em;
`;

const LoginButton = styled.button.attrs(props => ({
  onClick: props.handleClick
}))`
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

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