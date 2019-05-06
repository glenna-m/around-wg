import * as ActionTypes from './ActionTypes';

export const RecipeTypes = (state = {
        isLoading: true,
        errMess: null,
        recipeTypes: []
    }, action) => {

    switch(action.type) {

        case ActionTypes.ADD_RECIPE_TYPE:
            return {...state,
                    isLoading: false,
                    errMess: null,
                    recipeTypes: action.payload
            }

        case ActionTypes.RECIPE_TYPES_LOADING:
            return {...state,
                    isLoading: true,
                    errMess: null,
                    recipeTypes: []
            }

        case ActionTypes.RECIPE_TYPE_ACCESS_FAILED:
            return {...state,
                    isLoading: false,
                    errMess: action.payload,
                    recipeTypes: []
            }

        default: return state;
    }
}

