import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import Register from "./Register";
import {waitForElement} from "@testing-library/dom";

jest.mock("axios");

test("renders the page", () => {
  const {container} = render(
    <AuthenticationProvider>
      <BrowserRouter>
        <Register/>
      </BrowserRouter>
    </AuthenticationProvider>
  );

  expect(container.querySelector("h3")).toHaveTextContent("Registration");
  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
  expect(container.querySelector("input[name=name]")).toBeInTheDocument();
  expect(container.querySelector("input[name=password]")).toBeInTheDocument();
  expect(container.querySelector("button[name=registrationButton]")).toHaveTextContent("Register");
});

test("creates an user", async () => {
  const {container} = render(
    <AuthenticationProvider>
      <BrowserRouter>
        <Register/>
      </BrowserRouter>
    </AuthenticationProvider>
  );

  axios.post.mockImplementation(() => Promise.resolve({status: 201, data: {}}));

  fireEvent.change(container.querySelector("input[name=email]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=name]"), {target: {value: "test@test.com"}});
  fireEvent.change(container.querySelector("input[name=password]"), {target: {value: "testpass"}});
  fireEvent.click(container.querySelector("button[name=registrationButton]"));

  setTimeout(async () => {
    expect(await waitForElement(() => container.querySelector("h3"), {timeout: 1000}))
      .toHaveTextContent("Login");
  }, 500);
});