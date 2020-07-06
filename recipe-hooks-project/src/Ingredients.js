import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import {RECIPE_API_BASE_URL} from "./App";
import {
  Button,
  List,
  ListItem,
  ListItemCaption,
  ListItemImage,
  Overlay,
  OverlayOpaqueBackground,
  Title,
  Wrapper
} from "./components/General";
import {Input} from "./components/Form";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggleState";
import useTimedToggle from "./hooks/useTimedToggle";

const INGREDIENTS_RELATIVE_URL = "/recipe/ingredients/";

function Ingredients() {
  const [ingredientsList, setIngredients] = useState([]);
  const [newIngredient, handleNewIngredientChange, resetNewIngredient] = useInputState("");
  const [addingIngredient, toggleAddIngredient] = useToggle(false);
  const [showError, toggleError] = useTimedToggle(false);
  const [filterByAssignedToRecipe, toggleFilterByAssignedToRecipe] = useToggle(false);

  async function fetchIngredients() {
    const headers = {
      Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"
    }; //FIXME it should work with a real login
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + INGREDIENTS_RELATIVE_URL,
      method: "get",
      params: {
        assigned_only: filterByAssignedToRecipe ? 1 : 0,
        headers: headers
      }
    });
    const ingredients = response.data;
    setIngredients(ingredients);
  }

  useEffect(() => {
    fetchIngredients();
  }, [filterByAssignedToRecipe]);

  async function handleNewIngredientCreation(e) {
    e.preventDefault();
    const response = await axios.post(RECIPE_API_BASE_URL + INGREDIENTS_RELATIVE_URL,
      {name: newIngredient},
      {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}}); //FIXME it should work with a real login)
    if (response.status === 201) {
      toggleAddIngredient();
      resetNewIngredient();
      fetchIngredients();
    } else {
      toggleError(3000);
    }
  }

  return (
    <Wrapper>
      <Title>
        <div>Your favorite ingredients</div>
      </Title>
      <div>
        <span>Filter ingredients used in recipes</span>
        <input type="checkbox" value={filterByAssignedToRecipe} onChange={toggleFilterByAssignedToRecipe}/>
      </div>
      <List>
        {ingredientsList.map(ingredient => {
          return (
            <ListItem id={ingredient.id} key={ingredient.id}>
              <ListItemImage src={`https://loremflickr.com/320/240/${ingredient.name}`} alt={ingredient.name}/>
              <ListItemCaption>{ingredient.name}</ListItemCaption>
            </ListItem>)
        })}
      </List>
      {
        addingIngredient
          ? <form onSubmit={handleNewIngredientCreation}>
            <Input type="text" id="ingredientInput" value={newIngredient} onChange={handleNewIngredientChange}/>
            <Button primary onClick={handleNewIngredientCreation}><span>Create</span></Button>
          </form>
          : <Button primary onClick={toggleAddIngredient}><span>Add new ingredient</span></Button>
      }

      <OverlayOpaqueBackground show={showError}>
        <Overlay id="errorMessage" show={showError} animationDuration={3000}>
          <span>Error saving the ingredient, retry!</span>
        </Overlay>
      </OverlayOpaqueBackground>
    </Wrapper>
  );
}

export default memo(Ingredients);
export {INGREDIENTS_RELATIVE_URL};