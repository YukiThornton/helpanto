import {
  REQUEST_GET_RECIPES,
  REQUEST_GET_RECIPES_SUCCESS,
} from '../actions/recipe';

const recipes = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_GET_RECIPES_SUCCESS:
      return Object.assign({}, action.recipes);
    case REQUEST_GET_RECIPES:
    default:
      return state;
  }
}

export default recipes;
