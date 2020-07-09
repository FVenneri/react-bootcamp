import React from "react";
import {render} from "@testing-library/react";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import {BrowserRouter} from "react-router-dom";
import Register from "./Register";

test("renders the page", () => {
  const {container} = renderRegisterComponent();

  expect(container.querySelector("h3")).toHaveTextContent("Registration");
  expect(container.querySelector("input[name=email]")).toBeInTheDocument();
  expect(container.querySelector("input[name=name]")).toBeInTheDocument();
  expect(container.querySelector("input[name=password]")).toBeInTheDocument();
  expect(container.querySelector("button[name=registrationButton]")).toHaveTextContent("Register");
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
