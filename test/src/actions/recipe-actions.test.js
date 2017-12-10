import * as actions from '../../../src/actions/recipe-actions';
import * as actionTypes from '../../../src/constants/action-types';

describe('recipe-actions', () => {
  describe('filterRecipeList', () => {
    it('should set a filter text', () => {
      const filterText = 'this is a filter text';
      const expectedAction = {
        type: actionTypes.FILTER_RECIPE_LIST,
        filterText,
      };
      expect(actions.filterRecipeList(filterText)).toEqual(expectedAction);
    });
  });
});
