import * as ActionTypes from "./ActionTypes";
import { baseUrl } from '../shared/baseUrl';


export const addBlog = (blog) => ({
  type: ActionTypes.ADD_TO_BLOG,
  payload: blog
});

export const blogFailed = (errMess) => ({
  type: ActionTypes.BLOG_ACCESS_FAILED,
  payload: errMess
});

export const blogLoading = () => (dispatch) => ({
  type: ActionTypes.BLOG_LOADING
});

export const fetchBlog = () => (dispatch) => {
  dispatch(blogLoading(true)); 

  return fetch(baseUrl + 'blog')
        .then(response => {
            if (response.ok)
                return response;

            var error = new Error('Error ' + response.status +
                                  ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        error => {
            // no server response, but other error
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(blog => dispatch(addBlog(blog)))
        .catch( error => dispatch( blogFailed(error.message) ));
}

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback 
});

export const feedbackFailed = (errMess) => ({
  type: ActionTypes.FEEDBACK_ACCESS_FAILED,
  payload: errMess
});

export const feedbackLoading = () => (dispatch) => ({
  type: ActionTypes.FEEDBACK_LOADING
});

export const fetchFeedback = () => (dispatch) => {
  dispatch(feedbackLoading(true)); 

  return fetch(baseUrl + 'feedback')
        .then(response => {
            if (response.ok)
                return response;

            var error = new Error('Error ' + response.status +
                                  ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        error => {
            // no server response, but other error
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(feedback => dispatch(addFeedback(feedback)))
        .catch( error => dispatch( feedbackFailed(error.message) ));
}

export const postFeedback = (feedbackId, firstname, lastname, email, phone, okToContact) => (dispatch) => {
  
    return fetch(baseUrl + 'feedback',
                 { method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   credentials: 'same-origin',
                   body: JSON.stringify({
                             feedbackId: feedbackId,
                             firstname: firstname,
                             email: email,
                             phone: phone,
                             okToContact: okToContact,
                             date: new Date().toISOString()
                         })
                 })
        .then(response => {
            if (response.ok)
                return response;

            var error = new Error('Error ' + response.status +
                                  ': ' + response.statusText);
            error.response = response;
            throw error;

        },
        error => {
            throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(addFeedback(response)))
        .catch( error => {
            console.error("Post feedback: " + error.message);
            alert("Your feedback could not be posted\nError: " + error.message );
        });
}

export const addRecipeType = (recipeType) => ({
  type: ActionTypes.ADD_RECIPE_TYPE,
  payload: recipeType
});

export const recipeTypesFailed = (errMess) => ({
  type: ActionTypes.RECIPE_TYPE_ACCESS_FAILED,
  payload: errMess
});

export const recipeTypesLoading = () => (dispatch) => ({
  type: ActionTypes.RECIPE_TYPES_LOADING
});

export const fetchRecipeTypes = () => (dispatch) => {
  dispatch(recipeTypesLoading(true)); 

  return fetch(baseUrl + 'recipe_types')
        .then(response => {
            if (response.ok)
                return response;

            var error = new Error('Error ' + response.status +
                                  ': ' + response.statusText);
            error.response = response;
            throw error;
        },
        error => {
            // no server response, but other error
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(recipeTypes => dispatch(addRecipeType(recipeTypes)))
        .catch(error => dispatch( recipeTypesFailed(error.message) ));
}

