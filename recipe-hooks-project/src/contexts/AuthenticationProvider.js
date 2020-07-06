import React, {createContext, useState} from "react";

export const AuthContext = createContext();

export function AuthenticationProvider(props) {
  const [token, setToken] = useState(null);
  const login = tokenValue => {
    console.log("Logging in with token: " + tokenValue);
    setToken(tokenValue)
  };
  const logout = () => {
    console.log("Logging out token " + token)
    setToken(null);
  }
  return (
    <AuthContext.Provider value={{token: token, login: login, logout: logout}}>
      {props.children}
    </AuthContext.Provider>
  );
}