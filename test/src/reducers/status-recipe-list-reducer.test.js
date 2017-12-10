import reducer from '../../../src/reducers/status-recipe-list-reducer';
import * as actionTypes from '../../../src/constants/action-types';
import { INVALID_RECIPE_ID } from '../../../src/constants/values';

describe('status.recipeList reducer', () => {
  const initialState = {
    selected: false,
    selectedRecipeId: INVALID_RECIPE_ID,
    filterText: '',
  };
  const selectedAndFilteredState = {
    selected: true,
    selectedRecipeId: 'selectedAndFilteredState selectedRecipeId',
    filterText: 'selectedAndFilteredState filterText',
  };
  const selectedRecipeId = 'this is a selected recipe id';
  const filterText = 'this is a filter text';

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('should handle SELECT_RECIPE_ON_LIST', () => {
    it('should set selectedRecipeId (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.SELECT_RECIPE_ON_LIST,
          id: selectedRecipeId,
        },
      )).toEqual({
        selected: true,
        selectedRecipeId,
        filterText: initialState.filterText,
      });
    });

    it('should set selectedRecipeId', () => {
      expect(reducer(
        selectedAndFilteredState,
        {
          type: actionTypes.SELECT_RECIPE_ON_LIST,
          id: selectedRecipeId,
        },
      )).toEqual({
        selected: true,
        selectedRecipeId,
        filterText: selectedAndFilteredState.filterText,
      });
    });
  });

  describe('should handle DESELECT_RECIPE_ON_LIST', () => {
    it('should set selectedRecipeId (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.DESELECT_RECIPE_ON_LIST,
        },
      )).toEqual({
        selected: false,
        selectedRecipeId: INVALID_RECIPE_ID,
        filterText: initialState.filterText,
      });
    });

    it('should set selectedRecipeId', () => {
      expect(reducer(
        selectedAndFilteredState,
        {
          type: actionTypes.DESELECT_RECIPE_ON_LIST,
        },
      )).toEqual({
        selected: false,
        selectedRecipeId: INVALID_RECIPE_ID,
        filterText: selectedAndFilteredState.filterText,
      });
    });
  });

  describe('should handle FILTER_RECIPE_LIST', () => {
    it('should change only filterText (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.FILTER_RECIPE_LIST,
          filterText,
        },
      )).toEqual({
        selected: initialState.selected,
        selectedRecipeId: initialState.selectedRecipeId,
        filterText,
      });
    });

    it('should change only filterText', () => {
      expect(reducer(
        selectedAndFilteredState,
        {
          type: actionTypes.FILTER_RECIPE_LIST,
          filterText,
        },
      )).toEqual({
        selected: selectedAndFilteredState.selected,
        selectedRecipeId: selectedAndFilteredState.selectedRecipeId,
        filterText,
      });
    });
  });
});
