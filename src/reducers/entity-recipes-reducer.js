import {
  REQUEST_GET_RECIPES,
  REQUEST_GET_RECIPES_SUCCESS,
  REQUEST_GET_RECIPES_FAILURE,
  REQUEST_POST_RECIPE,
  REQUEST_POST_RECIPE_SUCCESS,
  REQUEST_POST_RECIPE_FAILURE,
} from '../actions/recipe-actions';

const initialState = {
  isFetching: false,
  byId: {},
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_RECIPES:
    case REQUEST_POST_RECIPE:
      return Object.assign({}, state,
        {
          isFetching: true,
        }
      );
    case REQUEST_GET_RECIPES_SUCCESS:
      return {
        isFetching: false,
        byId: action.recipes,
      };
    case REQUEST_GET_RECIPES_FAILURE:
      return Object.assign({}, state,
        {
          isFetching: false,
        }
      );
    case REQUEST_POST_RECIPE_SUCCESS:
      return Object.assign({}, state,
        {
          isFetching: false,
          byId: Object.assign({}, state.byId,
            {
              [action.id]: action.recipe,
            }
          ),
        }
      );
    case REQUEST_POST_RECIPE_FAILURE:
      return Object.assign({}, state,
        {
          isFetching: false,
        }
      );
    default:
      return state;
  }
}

export default recipes;
