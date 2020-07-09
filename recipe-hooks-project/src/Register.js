import React, {memo} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {Container, Form, FormTitle, Input, SubmitButton} from "./components/Form"
import useInputState from "./hooks/useInputState";
import useToggleState from "./hooks/useToggleState";

function Register() {
  const [email, handleEmailChange] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  const [name, handleNameChange] = useInputState("");
  const [redirect, toggleRedirect] = useToggleState(false)

  async function handleRegistration(evt) {
    evt.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user/create/",
        {email: email, name: name, password: password}
      );
      if (response.status === 201) {
        console.log("User created!");
        toggleRedirect();
      }
    } catch (e) {
      console.log("Registration failed"); //FIXME message to user?
    }
  }

  return (
    <>
      {
        redirect && <Redirect to="/app"/>
      }
      <Container className="Register">
        <Form>
          <FormTitle>Registration</FormTitle>
          <Input type="text" value={email} name="email" onChange={handleEmailChange}/>
          <Input type="text" value={name} name="name" onChange={handleNameChange}/>
          <Input type="password" value={password} name="password" onChange={handlePasswordChange}/>
          <SubmitButton handleClick={handleRegistration} primary name="registrationButton">Register</SubmitButton>
        </Form>
      </Container>
    </>
  );
}

export default memo(Register);