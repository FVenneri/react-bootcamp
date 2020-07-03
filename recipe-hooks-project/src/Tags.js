import React, {memo, useEffect, useState} from "react";
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
import axios from "axios";
import {RECIPE_API_BASE_URL} from "./App";
import {Input} from "./components/Form";
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggleState";
import useTimedToggle from "./hooks/useTimedToggle";

const TAGS_RELATIVE_URL = "/recipe/tags/";

function Tags() {
  const [tagsList, setTags] = useState([]);
  const [newTag, handleNewTagChange, resetNewTag] = useInputState("");
  const [addingTag, toggleAddTag] = useToggle(false);
  const [showError, toggleError] = useTimedToggle(false);
  const [filterByAssignedToRecipe, toggleFilterByAssignedToRecipe] = useToggle(false);

  async function fetchTags() {
    const headers = {
      Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"
    }; //FIXME it should work with a real login
    const response = await axios.request({
      url: RECIPE_API_BASE_URL + TAGS_RELATIVE_URL,
      method: "get",
      params: {
        assigned_only: filterByAssignedToRecipe ? 1 : 0,
        headers: headers
      }
    });
    const tags = response.data;
    setTags(tags);
  }

  useEffect(() => {
    fetchTags();
  }, [filterByAssignedToRecipe]);

  async function handleNewTagCreation(e) {
    e.preventDefault();
    const response = await axios.post(RECIPE_API_BASE_URL + TAGS_RELATIVE_URL,
      {name: newTag},
      {headers: {Authorization: "Token 771588d4be688173e35ffe08caec07ac8a95009e"}}); //FIXME it should work with a real login)
    if (response.status === 201) {
      toggleAddTag();
      resetNewTag();
      fetchTags();
    } else {
      toggleError(3000);
    }
  }

  return (
    <Wrapper>
      <Title>
        <div>Your favorite tags</div>
      </Title>
      <div>
        <span>Filter tags used in recipes</span>
        <input type="checkbox" value={filterByAssignedToRecipe} onChange={toggleFilterByAssignedToRecipe}/>
      </div>
      <List>
        {tagsList.map(e => {
          return (
            <ListItem id={e.id} key={e.id}>
              <ListItemImage src={`https://loremflickr.com/320/240/${e.name}`} alt={e.name}/>
              <ListItemCaption>{e.name}</ListItemCaption>
            </ListItem>)
        })}
      </List>
      {
        addingTag
          ? <form onSubmit={handleNewTagCreation}>
            <Input type="text" id="tagInput" value={newTag} onChange={handleNewTagChange}/>
            <Button primary onClick={handleNewTagCreation}><span>Create</span></Button>
          </form>
          : <Button primary onClick={toggleAddTag}><span>Add new tag</span></Button>
      }

      <OverlayOpaqueBackground show={showError}>
        <Overlay id="errorMessage" show={showError} animationDuration={3000}>
          <span>Error saving the tag, retry!</span>
        </Overlay>
      </OverlayOpaqueBackground>
    </Wrapper>
  );
}

export default memo(Tags);