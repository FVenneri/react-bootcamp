import React from "react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {PrivateRoutes} from "./PrivateRoutes";
import Navbar from "./Navbar";
import "./App.css";

const RECIPE_API_BASE_URL = "http://localhost:8000/api";

function App() {
  return (
    <ThemeProvider theme={{mode: "light"}}>
      <AuthenticationProvider>
        <BrowserRouter>
          <div className="test">
            <Navbar/>
            <Switch>
              <PrivateRoutes/>
            </Switch>
          </div>
        </BrowserRouter>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default App;
export {RECIPE_API_BASE_URL};
