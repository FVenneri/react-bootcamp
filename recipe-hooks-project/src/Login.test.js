import React from "react";
import {render} from "@testing-library/react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter} from "react-router-dom";
import Login from "./Login";

test("renders the login page", () => {
  const {container} = render(
    <AuthenticationProvider>
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    </AuthenticationProvider>
  );

  expect(container.querySelector("h3")).toHaveTextContent("Login");
  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
  expect(container.querySelector("input[name=password]")).toBeInTheDocument();
  expect(container.querySelector("button[name=loginButton]")).toHaveTextContent("login");
  expect(container.querySelector("a")).toHaveTextContent("Register");
});