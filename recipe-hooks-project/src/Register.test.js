import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import Register from "./Register";
import {waitForElement} from "@testing-library/dom";

jest.mock("axios");

test("renders the page", () => {
  const {container} = renderRegisterComponent();

  expect(container.querySelector("h3")).toHaveTextContent("Registration");
  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
  expect(container.querySelector("input[name=name]")).toBeInTheDocument();
  expect(container.querySelector("input[name=password]")).toBeInTheDocument();
  expect(container.querySelector("button[name=registrationButton]")).toHaveTextContent("Register");
});

test("creates an user", async () => {
  const {container} = renderRegisterComponent();

  axios.post.mockImplementation(() => Promise.resolve({status: 201, data: {}}));

  fillAndSubmitForm(container);

  setTimeout(async () => {
    expect(await waitForElement(() => container.querySelector("h3"), {timeout: 1000}))
      .toHaveTextContent("Login");
  }, 500);
});

test("creates an user", async () => {
  const {container} = renderRegisterComponent();

  axios.post.mockImplementation(() => Promise.resolve({status: 400, data: {}}));

  fillAndSubmitForm(container);

  setTimeout(async () => {
    expect(await waitForElement(() => container.querySelector("h3"), {timeout: 1000}))
      .toHaveTextContent("Login");
  }, 500);
});

function renderRegisterComponent() {
  return render(
    <AuthenticationProvider>
      <BrowserRouter>
        <Register/>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

function fillAndSubmitForm(container) {
  fireEvent.change(container.querySelector("input[name=email]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=name]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=password]"), {target: {value: "testpass"}});
  fireEvent.click(container.querySelector("button[name=registrationButton]"));
}
