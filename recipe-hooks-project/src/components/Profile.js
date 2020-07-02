import styled from "styled-components";

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
const Overlay = styled.div.attrs((props) => ({
  ...props,
}))`
  color: red;
  background: white;
  font-weight: 400;
  border: 2px solid red;
  box-shadow: 0 19px 38px rgba(220, 20, 60, 0.3), 0 15px 12px rgba(220, 20, 60, 0.1);
  z-index: 10;
  width: 25%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0; 
  top: 10%; 
  right: 0; 
  bottom: 0;
  margin: 0 auto;
  
  display: ${props => props.show ? "" : "none"};
  -webkit-animation: ${props => props.show ? `fadeInOut ${props.animationDuration / 1000}s linear forwards` : ""};
  animation: ${props => props.show ? `fadeInOut ${props.animationDuration / 1000}s linear forwards` : ""};
  
  @-webkit-keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

export {ProfileCard, Section, Label, Input, EditSection, ActionIcon, Overlay};