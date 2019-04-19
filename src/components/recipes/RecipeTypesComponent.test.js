import React from "react";
import ReactDOM from "react-dom";

import RecipeTypes from "./RecipeTypesComponent";
import { RECIPE_TYPES } from "../../shared/recipe-types";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RecipeTypes recipeTypes={RECIPE_TYPES} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
