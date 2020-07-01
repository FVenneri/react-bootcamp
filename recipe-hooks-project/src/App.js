import React from "react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {Routes} from "./components/Routes";

function App() {
  return (
    <ThemeProvider theme={{mode: "light"}}>
      <AuthenticationProvider>
        <BrowserRouter>
          <Switch>
            <Routes/>
          </Switch>
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default App;
