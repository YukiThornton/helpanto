export const SELECT_RECIPE_ON_LIST = 'SELECT_RECIPE_ON_LIST';

export const selectRecipeOnList = id => {
  return {
    type: SELECT_RECIPE_ON_LIST,
    id
  }
};
