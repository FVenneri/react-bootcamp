import React, {memo} from "react";
import {Title, Wrapper} from "./components/General";
import {Link} from "react-router-dom";

function RecipeApp(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Link to="/app/recipe/recipes">Recipes</Link>
      <Link to="/app/recipe/ingredients">Ingredients</Link>
      <Link to="/app/recipe/tags">Tags</Link>
    </Wrapper>
  );
}

export default memo(RecipeApp);