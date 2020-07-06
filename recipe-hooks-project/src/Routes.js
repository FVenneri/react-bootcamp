import React from "react";
import {Route} from "react-router-dom";
import AppPage from "./AppPage";
import Home from "./Home";
import Register from "./Register";
import Profile from "./Profile";
import Ingredients from "./Ingredients";
import Tags from "./Tags";
import Recipes from "./Recipes";
import RecipeDetails from "./RecipeDetails";

export function Routes() {
  return (
    <>
      <Route exact path="/app/recipe/recipes/:id" render={(props) => <RecipeDetails {...props} />}/>
      <Route exact path="/app/recipe/recipes" component={Recipes}/>
      <Route exact path="/app/recipe/tags" component={Tags}/>
      <Route exact path="/app/recipe/ingredients" component={Ingredients}/>
      <Route exact path="/app/recipe" component={AppPage}/>
      <Route exact path="/app/profile" component={Profile}/>
      <Route exact path="/app/register" component={Register}/>
      <Route exact path="/app" component={AppPage}/>
      <Route exact path="/" component={Home}/>
    </>
  );
}