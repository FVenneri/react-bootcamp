import {fireEvent, render} from "@testing-library/react";
import {AuthContext, AuthenticationProvider} from "./contexts/AuthenticationProvider";
import AppPage from "./AppPage";
import React from "react";
import Login from "./Login";
import {waitForElement} from "@testing-library/dom";

test("when not authenticated, renders login", () => {
  const {container} = render(
    <AuthContext.Provider value={{token: null}}>
      <AppPage/>
    </AuthContext.Provider>
  );
  expect(container.querySelector("h3")).toHaveTextContent("Login");
});

test("when authenticated, do not render login", () => {
  const {container, getByText} = render(
    <AuthContext.Provider value={{token: "myToken"}}>
      <AppPage/>
    </AuthContext.Provider>
  );
  expect(getByText(/Recipe App/i)).toBeInTheDocument();
  expect(container.querySelector("input[name=email]")).toBeNull();
});

test("when not authenticated, an user can login", async () => {
  const {container, getByText} = render(
    <AuthenticationProvider value={{isAuthenticated: false}}>
      <AppPage/>
    </AuthenticationProvider>
  );

  fireEvent.change(container.querySelector("input[name=email]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=password]"), {target: {value: "testpass"}});
  fireEvent.click(container.querySelector("button[name=loginButton]"));
  
  expect(await waitForElement(() => getByText(/Recipe App/i))).toBeInTheDocument();
});