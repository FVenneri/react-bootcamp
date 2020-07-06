import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {RECIPE_API_BASE_URL} from "./App";
import {
  Button,
  List,
  ListItem,
  ListItemCaption,
  ListItemImage,
  StyledListItemLink,
  Title, Wrapper
} from "./components/General";
import useToggle from "./hooks/useToggleState";
import {Form, Input} from "./components/Form";
import {Label} from "./components/Profile";
import useInputState from "./hooks/useInputState";
import {INGREDIENTS_RELATIVE_URL} from "./Ingredients";
import {TAGS_RELATIVE_URL} from "./Tags";

const RECIPES_RELATIVE_URL = "/recipe/recipes/";

const RecipeForm = styled(Form)`
  width: 40%;
`;
const RecipeFormSection = styled.div.attrs(props => ({
  ...props
}))`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RecipeFormSelect = styled.select.attrs(props => ({
  ...props
}))`
  width: 50%;
  margin-top: 20px;
`;

function Recipes() {
  const [recipesList, setRecipes] = useState([]);
  const [ingredientsList, setIngredients] = useState([]);
  const [tagsList, setTags] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isCreatingNewRecipe, toggleCreatingNewRecipe] = useToggle(false);
  const [title, handleTitleChange] = useInputState("");
  const [time, handleTimeChange] = useInputState("");
  const [price, handlePriceChange] = useInputState("");

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
    if (isCreatingNewRecipe) {
      fetchIngredients();
      fetchTags();
    } else
      fetchRecipes();
  }, [isCreatingNewRecipe]);

  async function fetchIngredients() {
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + INGREDIENTS_RELATIVE_URL,
      method: "get",
      params: {
        headers: {
          Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e" //FIXME it should work with a real login
        }
      }
    });
    const ingredients = response.data;
    setIngredients(ingredients);
  }

  async function fetchTags() {
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + TAGS_RELATIVE_URL,
      method: "get",
      params: {
        headers: {
          Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e" //FIXME it should work with a real login
        }
      }
    });
    const tags = response.data;
    setTags(tags);
  }

  async function handleCreateRecipe(e) {
    e.preventDefault();
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + RECIPES_RELATIVE_URL,
      method: "post",
      data: {
        "title": title,
        "ingredients": selectedIngredients,
        "tags": selectedTags,
        "time_minutes": 60,
        "price": 5.00
      },
      params: {
        headers: {
          Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e" //FIXME it should work with a real login
        }
      }
    });
    if (response.status === 201) {
      toggleCreatingNewRecipe();
      console.log("Success");
    } else
      console.log("Error");
  }

  function handleSelectIngredients(e) {
    const data = e.target.options;
    const selected = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].selected)
        selected.push(data[i].value);
    }
    setSelectedIngredients(selected);
  }

  function handleSelectTags(e) {
    const data = e.target.options;
    const selected = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].selected)
        selected.push(data[i].value);
    }
    setSelectedTags(selected);
  }

  return (
    <Wrapper>
      <Title>
        <div>Your favorite recipes</div>
      </Title>

      {
        isCreatingNewRecipe
          ? <>
            <RecipeForm>
              <RecipeFormSection>
                <Label htmlFor="nameInput">Title: </Label>
                <Input type="text" id="nameInput" value={title} onChange={handleTitleChange}/>
              </RecipeFormSection>
              <RecipeFormSection>
                <Label htmlFor="selectIngredients">Ingredients</Label>
                <RecipeFormSelect id="selectIngredients" onChange={handleSelectIngredients} multiple>
                  {
                    ingredientsList.map((item, i) => {
                      return (
                        <option key={i} value={item.id}>{item.name}</option>
                      )
                    }, this)}
                </RecipeFormSelect>
              </RecipeFormSection>
              <RecipeFormSection>
                <Label htmlFor="selectTags">Tags</Label>
                <RecipeFormSelect id="selectTags" onChange={handleSelectTags} multiple>
                  {
                    tagsList.map((item, i) => {
                      return (
                        <option key={i} value={item.id}>{item.name}</option>
                      )
                    }, this)}
                </RecipeFormSelect>
              </RecipeFormSection>
              <RecipeFormSection>
                <Label htmlFor="timeInput">Time (in mins): </Label>
                <Input type="text" id="timeInput" value={time} onChange={handleTimeChange}/>
              </RecipeFormSection>
              <RecipeFormSection>
                <Label htmlFor="priceInput">Price: </Label>
                <Input type="text" id="priceInput" value={price} onChange={handlePriceChange}/>
              </RecipeFormSection>
              <RecipeFormSection>
                <Button onClick={handleCreateRecipe}>Create recipe</Button>
              </RecipeFormSection>
            </RecipeForm>
          </>
          : <>
            <Button onClick={toggleCreatingNewRecipe}>Add new recipe</Button>
            <List>
              {recipesList.map(recipe => {
                return (
                  <StyledListItemLink key={`link-to-recipe-${recipe.id}`} to={`/app/recipe/recipes/${recipe.id}`}>
                    <ListItem id={recipe.id} key={recipe.id}>
                      <ListItemImage src={`https://loremflickr.com/320/240/${recipe.title}`} alt={recipe.title}/>
                      <ListItemCaption>{recipe.title}</ListItemCaption>
                    </ListItem>
                  </StyledListItemLink>)
              })}
            </List>
          </>
      }
    </Wrapper>
  );
}

export default memo(Recipes);
export {RECIPES_RELATIVE_URL};