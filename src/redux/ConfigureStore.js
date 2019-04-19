import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { RECIPE_TYPES } from "../shared/recipe-types";
import { InitialFeedback } from "./feedback";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      recipeTypes: RECIPE_TYPES,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
