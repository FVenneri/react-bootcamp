import React, {memo, useContext} from "react";
import {AuthContext} from "./contexts/AuthenticationProvider";
import RecipeApp from "./RecipeApp";
import Login from "./Login";

function AppPage() {
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
}

export default memo(AppPage);