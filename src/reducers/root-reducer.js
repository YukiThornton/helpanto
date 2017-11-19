import { combineReducers } from 'redux';
import recipes from './entity-recipes-reducer';
import recipeList from './status-recipe-list-reducer';
import error from './error-reducer';

export default combineReducers({
  entity: combineReducers({
    recipes: recipes,
  }),
  status: combineReducers({
    recipeList: recipeList
  }),
  error: error,
});
