import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Wrapper, Title} from "./components/General";
import axios from "axios";
import {RECIPE_API_BASE_URL} from "./App";

const List = styled.ul`
  list-style: none;
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  flex-wrap: wrap;  
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

const INGREDIENTS_RELATIVE_URL = "/recipe/ingredients/";

function Ingredients(props) {
  const [ingredientList, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await axios.get(RECIPE_API_BASE_URL + INGREDIENTS_RELATIVE_URL,
        {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}}); //FIXME it should work with a real login
      const ingredients = response.data;
      console.log(ingredients);

      setIngredients(ingredients);
    }

    fetchIngredients();
  }, []);

  return (
    <Wrapper>
      <Title>Your favorite ingredients</Title>
      <List>
        {ingredientList.map(e => {
          return (
            <ListItem id={e.id} key={e.id}>
              <ListItemImage src={`https://loremflickr.com/320/240/${e.name}`} alt={e.name}/>
              <ListItemCaption>{e.name}</ListItemCaption>
            </ListItem>)
        })}
      </List>
    </Wrapper>
  );
}

export default Ingredients;