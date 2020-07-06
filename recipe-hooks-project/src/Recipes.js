import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {RECIPE_API_BASE_URL} from "./App";
import {
  Button,
  List,
  ListItem,
  ListItemCaption,
  ListItemImage, Overlay,
  OverlayOpaqueBackground, StyledListItemLink,
  Title, Wrapper
} from "./components/General";

const RECIPES_RELATIVE_URL = "/recipe/recipes/";

function Recipes() {
  const [recipesList, setRecipes] = useState([]);

  async function fetchRecipes() {
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + RECIPES_RELATIVE_URL,
      method: "get",
      params: {
        headers: {
          Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e" //FIXME it should work with a real login
        }
      }
    });
    const recipes = response.data;
    setRecipes(recipes);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Wrapper>
      <Title>
        <div>Your favorite recipes</div>
      </Title>

      <List>
        {recipesList.map(recipe => {
          return (
            <StyledListItemLink to={`/app/recipe/recipes/${recipe.id}`}>
              <ListItem id={recipe.id} key={recipe.id}>
                <ListItemImage src={`https://loremflickr.com/320/240/${recipe.title}`} alt={recipe.title}/>
                <ListItemCaption>{recipe.title}</ListItemCaption>
              </ListItem>
            </StyledListItemLink>)
        })}
      </List>
      {/*{*/}
      {/*  addingIngredient*/}
      {/*    ? <form onSubmit={handleNewIngredientCreation}>*/}
      {/*      <Input type="text" id="ingredientInput" value={newIngredient} onChange={handleNewIngredientChange}/>*/}
      {/*      <Button primary onClick={handleNewIngredientCreation}><span>Create</span></Button>*/}
      {/*    </form>*/}
      {/*    : <Button primary onClick={toggleAddIngredient}><span>Add new ingredient</span></Button>*/}
      {/*}*/}

      {/*<OverlayOpaqueBackground show={showError}>*/}
      {/*  <Overlay id="errorMessage" show={showError} animationDuration={3000}>*/}
      {/*    <span>Error saving the ingredient, retry!</span>*/}
      {/*  </Overlay>*/}
      {/*</OverlayOpaqueBackground>*/}
    </Wrapper>
  );
}

export default memo(Recipes);
export {RECIPES_RELATIVE_URL};