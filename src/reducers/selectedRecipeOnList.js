import { SELECT_RECIPE_ON_LIST } from '../actions/recipe';

const initialState = {
  id: '1',
};

const selectedRecipeOnList = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RECIPE_ON_LIST:
      return {
        id: action.id
      };
    default:
      return state;
  }
}

export default selectedRecipeOnList;
