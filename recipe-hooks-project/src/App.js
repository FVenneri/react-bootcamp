import React from "react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import AppPage from "./AppPage";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <AppPage/>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
