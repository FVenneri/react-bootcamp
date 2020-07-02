import React from "react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {Routes} from "./Routes";
import Navbar from "./Navbar";

const RECIPE_API_BASE_URL = "http://localhost:8000/api";

function App() {
  return (
    <ThemeProvider theme={{mode: "light"}}>
      <AuthenticationProvider>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Routes/>
          </Switch>
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default App;
export {RECIPE_API_BASE_URL};
