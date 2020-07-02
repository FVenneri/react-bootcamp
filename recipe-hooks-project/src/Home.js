import React from "react";
import PatatasBravas from "./images/patatasBravas.jpg";
import {Link} from "react-router-dom";
import styled from "styled-components";

const SplashScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const AppDescription = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
  padding: 1em;
  margin: 1em;
`;

export default function Home() {
  return (
    <SplashScreen>
      <img src={PatatasBravas} alt="Patatas bravas"/>
      <AppDescription>
        Use this amazing app to build your own cookbook!
      </AppDescription>
      <Link to="/app">Go to the app (login required)!</Link>
    </SplashScreen>
  );
};