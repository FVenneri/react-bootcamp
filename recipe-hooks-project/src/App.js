import React from "react";
import Login from "./Login";
import {AuthContext, useAuth} from "./contexts/useAuth";

function App() {
  const isAuthenticated = useAuth();

  return (
    <AuthContext.Provider>
      {isAuthenticated
        ? <>
        </>
        : <>
          <Login/>
        </>
      }
    </AuthContext.Provider>
  );
}

export default App;
