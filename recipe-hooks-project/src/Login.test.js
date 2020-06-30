import React from "react";
import Login from "./Login";
import {render} from "@testing-library/react";

test("renders the login page", () => {
  const {container} = render(<Login/>);

  expect(container.querySelector("h3")).toHaveTextContent("Login");
  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
  expect(container.querySelector("input[name=password]")).toBeInTheDocument();
  expect(container.querySelector("button")).toHaveTextContent("login");
});