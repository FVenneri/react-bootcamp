import React from "react";
import {render} from "@testing-library/react";
import App from "./App";
import {AuthContext} from "./contexts/useAuth";

test("when not authenticated, renders login", () => {
  const {container} = render(<App/>);
  expect(container.querySelector("h3")).toHaveTextContent("Login");
});

test("when authenticated, do not render login", () => {
  const {container} = render(
    <AuthContext.Provider value={true}>
      <App/>
    </AuthContext.Provider>
  );
  expect(container.querySelector("input[name=email]")).toBeNull();
});
