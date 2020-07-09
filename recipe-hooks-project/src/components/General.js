import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: blue;
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

const OverlayOpaqueBackground = styled.div.attrs((props) => ({
  ...props,
}))`
  z-index: 10;
  width: 25%;
  height: 100px;
  position: absolute;
  left: 0; 
  top: 15%; 
  right: 0; 
  bottom: 0;
  margin: 0 auto;
  padding: 0;
  background: white;
  
  display: ${props => props.show ? "" : "none"};
`;

const Overlay = styled(OverlayOpaqueBackground).attrs((props) => ({
  ...props,
}))`
  color: red;
  background: white;
  font-weight: 400;
  border: 2px solid red;
  box-sizing: border-box; 
  box-shadow: 0 19px 38px rgba(220, 20, 60, 0.3), 0 15px 12px rgba(220, 20, 60, 0.1);
  z-index: 20;
  position: relative;
  left: 0; 
  top: 0; 
  right: 0; 
  bottom: 0;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
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
const Button = styled.button.attrs((props) => ({
  ...props
}))`
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  width: 250px;
  
  &:hover {
    background: ${props => props.primary ? "white" : "blue"};
    color: ${props => props.primary ? "blue" : "white"};
    border: 2px solid blue;
    cursor: pointer;
  }
  
  &:focus {
    outline: none;
  }
`;

const List = styled.ul`
  list-style: none;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;  
  overflow: auto;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
`;

const StyledListItemLink = styled(Link).attrs(props => ({
  ...props
}))`
  width: 30%;
`;

const ListItem = styled.li`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid blue;
  box-shadow: 0 15px 20px rgba(0, 0, 139, 0.3), 0 10px 7px rgba(0, 0, 139, 0.1);
  border-radius: 5px;
  padding: 30px;
  margin: 1em;
  background: #eae9e9;
`;

const ListItemCaption = styled.span`
  margin-top: 1em;
`;

const ListItemImage = styled.img`
  max-width: 80%;
  object-fit: cover;
`;

export {
  Wrapper,
  Title,
  Section,
  Overlay,
  OverlayOpaqueBackground,
  Button,
  List,
  StyledListItemLink,
  ListItem,
  ListItemCaption,
  ListItemImage
};