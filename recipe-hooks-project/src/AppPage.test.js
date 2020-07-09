import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "./contexts/AuthenticationProvider";
import AppPage from "./AppPage";
import Login from "./Login";

jest.mock("axios");

test("when not authenticated, renders login", () => {
  const {container} = renderAppPageWithToken(null);

  expect(container.querySelector("h3")).toHaveTextContent("Login");
});

test("when not authenticated, an user can login", () => {
  const {container, getByText} = renderAppPageWithToken(null);

  axios.post.mockImplementation(() => Promise.resolve({status: 200, data: {token: "myToken"}}));

  fireEvent.change(container.querySelector("input[name=email]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=password]"), {target: {value: "testpass"}});
  fireEvent.click(container.querySelector("button[name=loginButton]"));

  setTimeout(async () => {
    assertAppIsRenderedProperly(container);
  }, 100);
});

test("login fails", () => {
  const {container} = renderAppPageWithToken(null);

  axios.post.mockImplementation(() => Promise.reject({status: 400, data: {error: "Login Failed"}}));

  fireEvent.click(container.querySelector("button[name=loginButton]"));

  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
});

test("creates an user and redirects to login", async () => {
  const {container, getByText} = renderAppPageWithToken(null);
  axios.post.mockImplementation(() => Promise.resolve({status: 201, data: {}}));

  fireEvent.click(getByText(/Register/i));

  sleep(1000).then(() => {
    console.log("1 Form?")
    fillAndSubmitRegistrationForm(container);
    console.log("2 Form?")
    sleep(1000).then(() => {
      expect(container.querySelector("h3")).toHaveTextContent("Login");
    });
  });
});

export const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

function fillAndSubmitRegistrationForm(container) {
  fireEvent.change(container.querySelector("input[name=email]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=name]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=password]"), {target: {value: "testpass"}});
  fireEvent.click(container.querySelector("button[name=registrationButton]"));
}

function assertAppIsRenderedProperly(container) {
  expect(container.querySelector("div[name=Navbar]")).toHaveTextContent("Recipe App");
  const allLinks = container.querySelectorAll("div[name=Navbar] a");
  expect(allLinks.item(allLinks.length - 2)).toHaveTextContent("Profile");
  expect(allLinks.item(allLinks.length - 1)).toHaveTextContent("Logout");
}

function renderAppPageWithToken(token) {
  return render(
    <AuthContext.Provider value={{token: token}}>
      <BrowserRouter>
        <AppPage/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
