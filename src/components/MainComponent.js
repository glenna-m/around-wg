import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Blog from "./blog/BlogComponent";
import Feedback from "./feedback/FeedbackComponent";
import Footer from "./footer/FooterComponent";
import Header from "./header/HeaderComponent";

import { RECIPE_TYPES } from "../shared/recipe-types";
import RecipeTypes from "./recipes/RecipeTypesComponent";

import "./MainComponent.scss";

const mapStateToProps = state => {
  return {
    recipeTypes: state.recipeTypes
  };
};

class Main extends Component {
  render() {
    return (
      <div id="#mainWrapper">
        <Header />

        <Switch>
          <Route path="/blog" component={() => <Blog />} />
          <Route
            exact
            path="/recipeTypes"
            component={() => <RecipeTypes recipeTypes={RECIPE_TYPES} />}
          />
          <Route path="/feedback" component={() => <Feedback />} />
          <Redirect to="/blog" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
