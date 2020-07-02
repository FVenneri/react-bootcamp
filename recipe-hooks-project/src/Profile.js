import React, {memo, useEffect} from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css"
import {Wrapper} from "./components/General";
import {ProfileCard, Section, Title, Label, Input, EditSection, ActionIcon, Overlay} from "./components/Profile";
import {RECIPE_API_BASE_URL} from "./App";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggleState";
import useTimedToggle from "./hooks/useTimedToggle";

const USER_PROFILE_API_RELATIVE_URL = "/user/me/";

function Profile() {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const [email, , setEmail] = useInputState("");
  const [password, handlePasswordChange] = useInputState("");
  const [name, handleNameChange, setName] = useInputState("");
  const [showError, toggleError] = useTimedToggle(false);

  useEffect(() => {
    async function fetchProfile() {
      const profile = await axios.get(RECIPE_API_BASE_URL + USER_PROFILE_API_RELATIVE_URL,
        {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}});
      setEmail(profile.data.email);
      setName(profile.data.name);
    }

    fetchProfile();
  }, []);
  
  function toggleReadonly(e) {
    e.preventDefault();
    toggleIsEditing();
  }

  function handleSubmit(e) {
    e.preventDefault();
    Promise.resolve(modifyUser(password, name)).then(isModified => {
      if (isModified)
        toggleIsEditing();
      else
        toggleError(3000);
    });
  }

  async function modifyUser(password, name) {
    if ((name === "" || name === undefined) && (password === "" || password === undefined))
      return false;

    let modifyUserPayload;
    if (password !== "")
      modifyUserPayload = {name: name, password: password}
    else
      modifyUserPayload = {name: name}
    //FIXME is it possible to hide the post payload?
    const response = await axios.patch(RECIPE_API_BASE_URL + USER_PROFILE_API_RELATIVE_URL, modifyUserPayload);
    return response.status === 200;
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
          <Input type="text" id="emailInput" value={email} readOnly={true}/>
        </Section>
        <Section>
          <Label htmlFor="passwordInput">Password: </Label>
          <Input type="password" id="passwordInput" value={password}
                 onChange={handlePasswordChange} readOnly={!isEditing}/>
        </Section>
        <EditSection>
          {isEditing
            ? <ActionIcon className="fas fa-save fa-2x" onClick={handleSubmit}/>
            : <ActionIcon className="fas fa-edit fa-2x" onClick={toggleReadonly}/>
          }
        </EditSection>
      </ProfileCard>
      <Overlay id="errorMessage" show={showError} animationDuration={2500}>
        <span>Error saving the profile, retry!</span>
      </Overlay>
    </Wrapper>
  );
}

export default memo(Profile);