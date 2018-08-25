import * as actionTypes from '../constants/action-types';
import {
  MSG_ERR_FETCH_RECIPES,
  MSG_ERR_CREATE_RECIPE,
  MSG_ERR_DELETE_RECIPE,
} from '../constants/messages';
import { enqueueError } from './error-actions';

const API_ROOT = RECIPE_SERVER_URL; // eslint-disable-line no-undef

const convertRecipe = (apiRecipe) => {
  return {
    kind: apiRecipe.kind,
    title: apiRecipe.title,
    content: {
      memo: apiRecipe.content.memo,
    },
    createdAt: apiRecipe.created_at,
    lastModifiedAt: apiRecipe.last_modified_at,
  };
};

const convertRecipes = (apiRecipes) => {
  const recipes = {};
  apiRecipes.forEach((recipe) => {
    recipes[recipe.id] = convertRecipe(recipe);
  });
  return recipes;
};

export const selectRecipeOnList = (id) => {
  return {
    type: actionTypes.SELECT_RECIPE_ON_LIST,
    id,
  };
};

export const deselectRecipeOnList = () => {
  return {
    type: actionTypes.DESELECT_RECIPE_ON_LIST,
  };
};

export const filterRecipeList = (filterText) => {
  return {
    type: actionTypes.FILTER_RECIPE_LIST,
    filterText,
  };
};

const requestGetRecipes = () => {
  return {
    type: actionTypes.REQUEST_GET_RECIPES,
  };
};

const succeedGetRecipes = (recipes) => {
  return {
    type: actionTypes.REQUEST_GET_RECIPES_SUCCESS,
    recipes,
  };
};

const failGetRecipes = () => {
  return {
    type: actionTypes.REQUEST_GET_RECIPES_FAILURE,
  };
};

export const fetchRecipes = () => (dispatch) => {
  dispatch(requestGetRecipes());
  return fetch(`${API_ROOT}/recipes`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(MSG_ERR_FETCH_RECIPES);
      }
      return res.json();
    })
    .then(json => dispatch(succeedGetRecipes(convertRecipes(json.recipes))))
    .catch((error) => {
      dispatch(failGetRecipes());
      return dispatch(enqueueError(error.message));
    });
};

const requestPostRecipe = () => {
  return {
    type: actionTypes.REQUEST_POST_RECIPE,
  };
};

const succeedPostRecipe = (id, recipe) => {
  return {
    type: actionTypes.REQUEST_POST_RECIPE_SUCCESS,
    recipe,
    id,
  };
};

const failPostRecipe = () => {
  return {
    type: actionTypes.REQUEST_POST_RECIPE_FAILURE,
  };
};

// TODO should check title and content
export const createRecipe = (title, content) => (dispatch) => {
  dispatch(requestPostRecipe());
  return fetch(`${API_ROOT}/memo`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  })
    .then((res) => {
      if (res.status !== 201) {
        throw new Error(MSG_ERR_CREATE_RECIPE);
      }
      return res.json();
    })
    .then(json => dispatch(succeedPostRecipe(json.id, convertRecipe(json))))
    .catch((error) => {
      dispatch(failPostRecipe());
      return dispatch(enqueueError(error.message));
    });
};

const requestDeleteRecipe = () => {
  return {
    type: actionTypes.REQUEST_DELETE_RECIPE,
  };
};

const succeedDeleteRecipe = (id) => {
  return {
    type: actionTypes.REQUEST_DELETE_RECIPE_SUCCESS,
    id,
  };
};

const failDeleteRecipe = () => {
  return {
    type: actionTypes.REQUEST_DELETE_RECIPE_FAILURE,
  };
};

export const deleteRecipe = id => (dispatch) => {
  dispatch(requestDeleteRecipe());
  return fetch(`${API_ROOT}/recipe/${id}`, {
    method: 'delete',
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(MSG_ERR_DELETE_RECIPE);
      }
    })
    .then(() => dispatch(succeedDeleteRecipe(id)))
    .catch((error) => {
      dispatch(failDeleteRecipe());
      return dispatch(enqueueError(error.message));
    });
};
