import { SELECT_RECIPE_ON_LIST } from '../actions/recipe';

const initialState = {
  selected: false,
  selectedRecipeId: '-1',
};

const recipeListStatus = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE_ON_LIST:
      return {
        selected: true,
        selectedRecipeId: action.id
      };
    default:
      return state;
  }
}

export default recipeListStatus;
