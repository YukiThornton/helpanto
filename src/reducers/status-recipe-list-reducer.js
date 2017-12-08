import { SELECT_RECIPE_ON_LIST, FILTER_RECIPE_LIST } from '../actions/recipe-actions';

const initialState = {
  selected: false,
  selectedRecipeId: '-1',
  filterText: '',
};

const recipeListStatus = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE_ON_LIST:
      return Object.assign({}, state,
        {
          selected: true,
          selectedRecipeId: action.id
        }
      );
    case FILTER_RECIPE_LIST:
      return Object.assign({}, state,
        {
          filterText: action.filterText,
        }
      );
    default:
      return state;
  }
}

export default recipeListStatus;
