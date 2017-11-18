import { combineReducers } from 'redux';
import recipes from './recipes';
import selectedRecipeOnList from './selectedRecipeOnList';

export default combineReducers({
  entity: combineReducers({
    recipes: recipes,
  }),
  selected: combineReducers({
    recipeOnList: selectedRecipeOnList
  }),
});
