import React, { Component } from "react";
import { actions } from "react-redux-form";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Blog from "./blog/BlogComponent";
import Feedback from "./feedback/FeedbackComponent";
import Footer from "./footer/FooterComponent";
import Header from "./header/HeaderComponent";
import RecipeTypes from "./recipes/RecipeTypesComponent";


import { fetchBlog, 
         fetchFeedback,
         fetchRecipeTypes } from "../redux/ActionCreators";

import "./MainComponent.scss";

const mapStateToProps = state => {
  return {
    blog: state.blog,
    feedback: state.feedback,
    recipeTypes: state.recipeTypes
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchBlog: () => {dispatch(fetchBlog())},

    // postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch( postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
    fetchFeedback: () => {dispatch(fetchFeedback())},
    // resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },

    fetchRecipeTypes: () => {dispatch(fetchRecipeTypes())}
})

class Main extends Component {

  componentDidMount() {
      this.props.fetchBlog();
      this.props.fetchFeedback();
      this.props.fetchRecipeTypes();
  }

  render() {
    const BlogPage = () => {
       return(
         <Blog blogEntries = {this.props.blog.blog} 
               isLoading = {this.props.blog.isLoading}
               errMess = {this.props.blog.errMess}
         />
       );
    };

    const FeedbackPage = () => {
       return(
         <Feedback feedback = {this.props.feedback.feedback} 
                      isLoading = {this.props.feedback.isLoading}
                      errMess = {this.props.feedback.errMess}
         />
       );
    };

    const RecipeTypesPage = () => {
       return(
         <RecipeTypes recipeTypes = {this.props.recipeTypes.recipeTypes} 
                      isLoading = {this.props.recipeTypes.isLoading}
                      errMess = {this.props.recipeTypes.errMess}
         />
       );
    };

    return (
      <div id="#mainWrapper">
        <Header />

        <Switch>
          <Route path="/blog" component={BlogPage} />
          <Route path="/recipeTypes" component={RecipeTypesPage} />
          <Route path="/feedback" component={FeedbackPage} />
          <Redirect to="/blog" />
        </Switch>

        <Footer />
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
