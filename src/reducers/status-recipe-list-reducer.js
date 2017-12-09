import {
  SELECT_RECIPE_ON_LIST,
  DESELECT_RECIPE_ON_LIST,
  FILTER_RECIPE_LIST,
} from '../actions/recipe-actions';

const INVALID_RECIPE_ID = '-1';

const initialState = {
  selected: false,
  selectedRecipeId: INVALID_RECIPE_ID,
  filterText: '',
};

const recipeListStatus = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE_ON_LIST:
      return Object.assign({}, state,
        {
          selected: true,
          selectedRecipeId: action.id,
        }
      );
    case DESELECT_RECIPE_ON_LIST:
      return Object.assign({}, state,
        {
          selected: false,
          selectedRecipeId: INVALID_RECIPE_ID,
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
