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

const StyledLink = styled(
  styled(Link)`
    color: white;
    display: block;
    margin: 0.5em 0;
    font-size: 1em;
    
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `,
  "active"
)`
`;

export default function Navbar() {
  const {logout} = useContext(AuthContext);

  function handleLogout(e) {
    logout();
  }

  return (
    <NavbarContainer name="Navbar">
      <AppName>Recipe App</AppName>
      <StyledLink to="/app/profile" name="Profile">Profile</StyledLink>
      <StyledLink to="/app" name="Logout" onClick={handleLogout}>Logout</StyledLink>
    </NavbarContainer>
  );
};