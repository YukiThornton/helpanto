import { combineReducers } from 'redux';
import recipes from './entity-recipes-reducer';
import recipeList from './status-recipe-list-reducer';
import modal from './status-modal-reducer';
import error from './error-reducer';

export default combineReducers({
  entity: combineReducers({
    recipes,
  }),
  status: combineReducers({
    recipeList,
    modal,
  }),
  error,
});
