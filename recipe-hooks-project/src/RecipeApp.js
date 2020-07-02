import React, {memo} from "react";

function RecipeApp(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default memo(RecipeApp);