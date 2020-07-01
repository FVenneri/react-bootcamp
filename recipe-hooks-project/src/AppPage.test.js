import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {waitForElement} from "@testing-library/dom";
import {AuthContext, AuthenticationProvider} from "./contexts/AuthenticationProvider";
import axios from "axios";
import AppPage from "./AppPage";
import Login from "./Login";
import {BrowserRouter} from "react-router-dom";

jest.mock("axios");

test("when not authenticated, renders login", () => {
  const {container} = renderAppPageWithoutAuthentication();

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
  const {container, getByText} = renderAppPageWithoutAuthentication();

  axios.post.mockImplementation(() => Promise.resolve({status: 200, data: {token: "myToken"}}));

  fireEvent.change(container.querySelector("input[name=email]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=password]"), {target: {value: "testpass"}});
  fireEvent.click(container.querySelector("button[name=loginButton]"));

  expect(await waitForElement(() => getByText(/Recipe App/i))).toBeInTheDocument();
});

test("login fails", async () => {
  const {container} = renderAppPageWithoutAuthentication();

  axios.post.mockImplementation(() => Promise.reject({status: 400, data: {error: "Login Failed"}}));

  fireEvent.click(container.querySelector("button[name=loginButton]"));

  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
});

function renderAppPageWithoutAuthentication() {
  return render(
    <AuthenticationProvider value={{token: null}}>
      <BrowserRouter>
        <AppPage/>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}
