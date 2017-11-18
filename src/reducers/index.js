import { combineReducers } from 'redux';
import recipes from './recipes';
import recipeListStatus from './recipeListStatus';

export default combineReducers({
  entity: combineReducers({
    recipes: recipes,
  }),
  status: combineReducers({
    recipeList: recipeListStatus
  }),
});
