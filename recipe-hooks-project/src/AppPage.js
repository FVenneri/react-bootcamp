import React, {useContext} from "react";
import RecipeApp from "./RecipeApp";
import Login from "./Login";
import {AuthContext} from "./contexts/AuthenticationProvider";

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