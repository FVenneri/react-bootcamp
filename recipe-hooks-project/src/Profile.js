import React, {memo, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css"
import {Wrapper} from "./components/General";
import {RECIPE_API_BASE_URL} from "./App";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggleState";

const ProfileCard = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  border: 2px solid lightgray;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
  margin: auto;
`;
const Section = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 90%;
  padding-bottom: 1.5em;
  margin: auto;
`;
const Title = styled(Section)`
  height: 1em;
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
  justify-content: center;
  padding-top: 1.5em;
`;
const Label = styled.label`
  font-size: 1em;
  width: 20%;
  color: blue;
  margin-left: 2.5em;
`;
const Input = styled.input.attrs((props) => ({
  ...props
}))`
  font-size: 1em;
  padding: 15px;
  width: 50%;
  border: 2px solid blue;
  border-radius: 5px;
  
  &:hover {
    border-color: red;
  }
`;
const EditSection = styled(Section)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Profile() {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const [email, handleEmailChange, setEmail] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  const [name, handleNameChange, setName] = useInputState("");

  useEffect(() => {
    async function fetchData() {
      const profile = await axios.get(RECIPE_API_BASE_URL + "/user/me",
        {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}});
      setEmail(profile.data.email);
      setName(profile.data.name);

      console.log("RERENDER")
    }

    fetchData();
  }, []);

  function toggleReadonly(e) {
    e.preventDefault();
    toggleIsEditing();
  }

  return (
    <Wrapper>
      <ProfileCard>
        <Title>
          Profile
        </Title>
        <Section>
          <Label htmlFor="nameInput">Name: </Label>
          <Input type="text" id="nameInput" value={name} onChange={handleNameChange} readOnly={!isEditing}/>
        </Section>
        <Section>
          <Label htmlFor="emailInput">Email: </Label>
          <Input type="text" id="emailInput" value={email} onChange={handleEmailChange} readOnly={!isEditing}/>
        </Section>
        <Section>
          <Label htmlFor="passwordInput">Password: </Label>
          <Input type="password" id="passwordInput" value={password}
                 onChange={handlePasswordChange} readOnly={!isEditing}/>
        </Section>
        <EditSection>
          <i className="fas fa-edit fa-2x" onClick={toggleReadonly}></i>
        </EditSection>
      </ProfileCard>
    </Wrapper>
  );
}

export default memo(Profile);