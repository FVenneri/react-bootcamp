import React, {useContext} from "react";
import {AuthContext} from "./contexts/AuthenticationProvider";
import RecipeApp from "./RecipeApp";
import Login from "./Login";

export default function AppPage(props) {
  const {token} = useContext(AuthContext);

  return (
    <div>
      {token !== null
        ? <>
          <RecipeApp title="Recipe App"/>
        </>
        : <>
          <Login/>
        </>
      }
    </div>
  );
};