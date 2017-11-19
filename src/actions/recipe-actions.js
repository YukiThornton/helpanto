const API_ROOT = 'http://localhost:3000';
export const SELECT_RECIPE_ON_LIST = 'SELECT_RECIPE_ON_LIST';
export const REQUEST_GET_RECIPES = 'REQUEST_GET_RECIPES';
export const REQUEST_GET_RECIPES_SUCCESS = 'REQUEST_GET_RECIPES_SUCCESS';
export const REQUEST_GET_RECIPES_FAILURE = 'REQUEST_GET_RECIPES_FAILURE';

export const selectRecipeOnList = id => {
  return {
    type: SELECT_RECIPE_ON_LIST,
    id
  };
};

const requestGetRecipes = () => {
  return {
    type: REQUEST_GET_RECIPES,
  };
}

const convertRecipes = (apiRecipe) => {
  const recipes = {};
  apiRecipe.map((recipe) =>
    recipes[recipe._id] = {
      title: recipe.title,
      content: recipe.content,
      createdAt: recipe.created_at,
      lastModifiedAt: recipe.last_modified_at,
    }
  );
  return recipes;
}

const receiveGetRecipes = (recipes) => {
  return {
    type: REQUEST_GET_RECIPES_SUCCESS,
    recipes: recipes,
  };
}

const shouldFetchRecipes = getState => {
  const recipes = getState().entity.recipes;
  if (Object.keys(recipes.byId).length > 0) {
    return false;
  }
  if (recipes.isFetching) {
    return false;
  }
  return true;
}

const fetchRecipes = () => dispatch => {
  dispatch(requestGetRecipes());
  return fetch(`${API_ROOT}/recipes`)
    .then(response => response.json())
    .then(json => {
      return dispatch(receiveGetRecipes(convertRecipes(json.recipes)));
    })
}

export const fetchRecipesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRecipes(getState)) {
    return dispatch(fetchRecipes());
  }
};
