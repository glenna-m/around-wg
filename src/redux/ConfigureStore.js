import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { Blog } from './blog';
import { Feedback } from './feedback';
import { RecipeTypes } from './recipe-types';

import { InitialFeedback } from './Forms';

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      blog: Blog,
      feedback: Feedback,
      recipeTypes: RecipeTypes,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
