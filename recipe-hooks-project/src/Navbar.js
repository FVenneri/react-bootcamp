import React, {useContext} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.css"
import {AuthContext} from "./contexts/AuthenticationProvider";

const NavbarContainer = styled.div`
  background-color: blue;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppName = styled.div`
  color: white;
  font-size: 2em;
  font-weight: 500;
`;

const StyledLink = styled(Link).attrs(props => ({
  ...props
}))`
  color: white;
  display: block;
  margin: 0.5em 0;
  font-size: 1em;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function Navbar() {
  const {token, logout} = useContext(AuthContext);

  function handleLogout(e) {
    logout();
  }

  return (
    <NavbarContainer name="Navbar">
      <StyledLink to="/app" name="goToHome"><AppName>Recipe App</AppName></StyledLink>
      {token !== null && <StyledLink to="/app/profile" name="Profile">Profile</StyledLink>}
      <StyledLink to="/" name="Logout" onClick={handleLogout}>Logout</StyledLink>
    </NavbarContainer>
  );
};