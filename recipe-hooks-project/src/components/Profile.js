import styled from "styled-components";
import {Section} from "./General";

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
  
  &:read-only {
    background: lightgray;
    &:hover  {
      border: 2px solid blue;
    }
  }  
`;
const EditSection = styled(Section)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ActionIcon = styled.i.attrs((props) => ({
  ...props
}))``;

export {ProfileCard, Label, Input, EditSection, ActionIcon};