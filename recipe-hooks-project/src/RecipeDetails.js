import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button, Wrapper} from "./components/General";
import axios from "axios";
import {RECIPE_API_BASE_URL} from "./App";
import {RECIPES_RELATIVE_URL} from "./Recipes";
import {Form, Input} from "./components/Form";

const Recipe = styled.div.attrs(props => ({
  ...props
}))`
  margin-top: 2em;
  border: 2px solid darkblue;
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
  box-shadow: 0 19px 38px rgba(0, 0, 139, 0.3), 0 15px 12px rgba(0, 0, 139, 0.1);
  width: 50%;
`;
const Image = styled.img.attrs(props => ({
  ...props
}))`
  max-width: 100%;
  object-fit: cover;
  margin: auto;  
`;
const Title = styled.div.attrs(props => ({
  ...props
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Details = styled(Title).attrs(props => ({
  ...props
}))`
  font-size: 1em;
  margin-top: 10px;
`;
const DetailsText = styled.span.attrs(props => ({
  ...props
}))`
  color: ${props => props.color !== undefined ? props.color : "blue"};
  padding-left: 10px;
  padding-right: 10px;
`;
const ImageForm = styled(Form).attrs(props => ({
  ...props
}))`
  margin-top: 50px;
  width: 30%;
`;
const ImageInput = styled(Input).attrs(props => ({
  ...props
}))`
`;

export default function RecipeDetails(props) {
  const [recipe, setRecipe] = useState({});
  const [image, setImage] = useState(null);

  async function fetchRecipe() {
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + RECIPES_RELATIVE_URL + props.match.params.id,
      method: "get",
      params: {
        headers: {
          Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e" //FIXME it should work with a real login
        }
      }
    });
    const recipe = response.data;
    const imgTag = recipe.title.replace(/\s/g, "-").toLowerCase();
    setRecipe({...recipe, imgTag: imgTag});
  }

  useEffect(() => {
    fetchRecipe();
  });

  function handleChangeImage(e) {
    e.preventDefault();
    setImage(e.target.files[0]);
  }

  async function handleImageUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + RECIPES_RELATIVE_URL + props.match.params.id + "/upload-image/",
      method: "post",
      data: formData,
      params: {
        headers: {
          Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e" //FIXME it should work with a real login
        }
      }
    });
    if (response.status === 200) {
      console.log("Success");
    } else
      console.log("Error");
  }

  return (
    <Wrapper>
      <Recipe>
        <Image src={recipe.image} alt={recipe.imgTag}/>
        <Title>{recipe.title}</Title>
        <Details>
          <DetailsText color="darkblue">Ingredients: </DetailsText>
          {
            recipe.ingredients !== undefined && recipe.ingredients.map(ing => {
              return <DetailsText key={`tag-${ing.id}`}>{ing.name}</DetailsText>
            })
          }
        </Details>
        <Details>
          <DetailsText color="darkblue">Tags: </DetailsText>
          {
            recipe.tags !== undefined && recipe.tags.map(tag => {
              return <DetailsText key={`tag-${tag.id}`}>{tag.name}</DetailsText>
            })
          }
        </Details>
      </Recipe>
      <ImageForm>
        <ImageInput type="file" id="fileInput" onChange={handleChangeImage}/>
        <Button primary onClick={handleImageUpload}>Upload</Button>
      </ImageForm>
    </Wrapper>
  );
};