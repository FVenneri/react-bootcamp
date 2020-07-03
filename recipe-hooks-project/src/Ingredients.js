import React, {memo, useEffect, useState} from "react";
import styled from "styled-components";
import {Wrapper, Title} from "./components/General";
import axios from "axios";
import {RECIPE_API_BASE_URL} from "./App";
import {Input} from "./components/Form";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggleState";
import {Overlay, ProfileCard} from "./components/Profile";
import useTimedToggle from "./hooks/useTimedToggle";

const List = styled.ul`
  list-style: none;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  flex-wrap: wrap;  
  overflow: auto;
`;
const ListItem = styled.li`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid blue;
  box-shadow: 0 15px 20px rgba(220, 20, 60, 0.3), 0 10px 7px rgba(220, 20, 60, 0.1);
  border-radius: 5px;
  width: 20%;
  padding: 30px;
  margin: 1em;
  background: #eae9e9;
`;
const ListItemCaption = styled.span`
  margin-top: 1em;
`;
const ListItemImage = styled.img`
  max-width: 80%;
  object-fit: cover;
`;
const Button = styled.button.attrs((props) => ({
  ...props
}))`
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "blue"};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  width: 250px;
  
  &:hover {
    background: ${props => props.primary ? "white" : "blue"};
    color: ${props => props.primary ? "blue" : "white"};
    border: 2px solid blue;
    cursor: pointer;
  }
`;

const INGREDIENTS_RELATIVE_URL = "/recipe/ingredients/";

function Ingredients(props) {
  const [ingredientsList, setIngredients] = useState([]);
  const [newIngredient, handleNewIngredientChange, resetNewIngredient] = useInputState("");
  const [addingIngredient, toggleAddIngredient] = useToggle(false);
  const [showError, toggleError] = useTimedToggle(false);

  async function fetchIngredients() {
    const response = await axios.get(RECIPE_API_BASE_URL + INGREDIENTS_RELATIVE_URL,
      {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}}); //FIXME it should work with a real login
    const ingredients = response.data;
    setIngredients(ingredients);
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  async function handleNewIngredientCreation(e) {
    e.preventDefault();
    // const response = await axios.post(RECIPE_API_BASE_URL + INGREDIENTS_RELATIVE_URL,
    //   {name: newIngredient},
    //   {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}}); //FIXME it should work with a real login)
    // if (response.status === 201) {
    //   toggleAddIngredient();
    //   fetchIngredients();
    // } else {
    //   toggleError(3000);
    // }
    toggleError(3000);

  }

  return (
    <Wrapper>
      <Title>Your favorite ingredients</Title>
      <List>
        {ingredientsList.map(e => {
          return (
            <ListItem id={e.id} key={e.id}>
              <ListItemImage src={`https://loremflickr.com/320/240/${e.name}`} alt={e.name}/>
              <ListItemCaption>{e.name}</ListItemCaption>
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

      <Overlay id="errorMessage" show={showError} animationDuration={2500}>
        <span>Error saving the ingredient, retry!</span>
      </Overlay>
    </Wrapper>
  );
}

export default memo(Ingredients);