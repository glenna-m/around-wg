import * as ActionTypes from './ActionTypes';

export const Blog = (state = {
        isLoading: true,
        errMess: null,
        blog: []
    }, action) => {

    switch(action.type) {

        case ActionTypes.ADD_TO_BLOG:
            return {...state,
                    isLoading: false,
                    errMess: null,
                    blog: action.payload
            }

        case ActionTypes.BLOG_LOADING:
            return {...state,
                    isLoading: true,
                    errMess: null,
                    blog: []
            }

        case ActionTypes.BLOG_ACCESS_FAILED:
            return {...state,
                    isLoading: false,
                    errMess: action.payload,
                    blog: []
            }

        default: return state;
    }
}

