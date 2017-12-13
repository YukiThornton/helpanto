import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from '../../../src/actions/recipe-actions';
import * as actionTypes from '../../../src/constants/action-types';
import {
  MSG_ERR_FETCH_RECIPES,
  MSG_ERR_CREATE_RECIPE,
  MSG_ERR_DELETE_RECIPE,
} from '../../../src/constants/messages';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('recipe-actions', () => {
  const initialState = {
    isFetching: false,
    byId: {},
  };
  const responseRecipes = [
    {
      id: 'id0',
      title: 'title1',
      content: 'content1',
      created_at: '2017-12-01T06:44:04.262Z',
      last_modified_at: '2017-12-01T06:44:04.262Z',
    },
    {
      id: 'id1',
      title: 'title2',
      content: 'content2',
      created_at: '2017-12-02T06:44:04.262Z',
      last_modified_at: '2017-12-02T06:44:04.262Z',
    },
  ];
  const stateRecipes = {
    id0: {
      title: 'title1',
      content: 'content1',
      createdAt: '2017-12-01T06:44:04.262Z',
      lastModifiedAt: '2017-12-01T06:44:04.262Z',
    },
    id1: {
      title: 'title2',
      content: 'content2',
      createdAt: '2017-12-02T06:44:04.262Z',
      lastModifiedAt: '2017-12-02T06:44:04.262Z',
    },
  };

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('selectRecipeOnList', () => {
    it('should set a selected recipe id', () => {
      const selectedRecipeId = 'id01';
      const expectedAction = {
        type: actionTypes.SELECT_RECIPE_ON_LIST,
        id: selectedRecipeId,
      };
      expect(actions.selectRecipeOnList(selectedRecipeId)).toEqual(expectedAction);
    });
  });

  describe('deselectRecipeOnList', () => {
    it('should remove selected recipe id', () => {
      const expectedAction = {
        type: actionTypes.DESELECT_RECIPE_ON_LIST,
      };
      expect(actions.deselectRecipeOnList()).toEqual(expectedAction);
    });
  });

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

  describe('fetchRecipes', () => {
    it('should fetch recipes', () => {
      const expectedActions = [
        { type: actionTypes.REQUEST_GET_RECIPES },
        { type: actionTypes.REQUEST_GET_RECIPES_SUCCESS, recipes: stateRecipes },
      ];
      fetchMock.getOnce(
        '*',
        {
          body: { recipes: responseRecipes },
          headers: { 'content-type': 'application/json' },
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.fetchRecipes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should fetch empty recipes', () => {
      const expectedActions = [
        { type: actionTypes.REQUEST_GET_RECIPES },
        { type: actionTypes.REQUEST_GET_RECIPES_SUCCESS, recipes: {} },
      ];
      fetchMock.getOnce(
        '*',
        {
          body: { recipes: [] },
          headers: { 'content-type': 'application/json' },
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.fetchRecipes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should fail(statusCode != 200)', () => {
      const expectedActions = [
        { type: actionTypes.REQUEST_GET_RECIPES },
        { type: actionTypes.REQUEST_GET_RECIPES_FAILURE },
        { type: actionTypes.ENQUEUE_ERROR, message: MSG_ERR_FETCH_RECIPES },
      ];
      fetchMock.getOnce(
        '*',
        {
          body: { recipes: [] },
          headers: { 'content-type': 'application/json' },
          status: 404,
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.fetchRecipes()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('createRecipe', () => {
    it('should create a recipe', () => {
      const creatingRecipeId = 'id0';
      const recipe = stateRecipes[creatingRecipeId];
      const expectedActions = [
        { type: actionTypes.REQUEST_POST_RECIPE },
        {
          type: actionTypes.REQUEST_POST_RECIPE_SUCCESS,
          recipe,
          id: creatingRecipeId,
        },
      ];
      fetchMock.postOnce(
        '*',
        {
          body: responseRecipes[0],
          headers: { 'content-type': 'application/json' },
          status: 201,
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.createRecipe(recipe.title, recipe.content)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should fali to create a recipe', () => {
      const creatingRecipeId = 'id0';
      const recipe = stateRecipes[creatingRecipeId];
      const expectedActions = [
        { type: actionTypes.REQUEST_POST_RECIPE },
        { type: actionTypes.REQUEST_POST_RECIPE_FAILURE },
        { type: actionTypes.ENQUEUE_ERROR, message: MSG_ERR_CREATE_RECIPE },
      ];
      fetchMock.postOnce(
        '*',
        {
          body: responseRecipes[0],
          headers: { 'content-type': 'application/json' },
          status: 400,
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.createRecipe(recipe.title, recipe.content)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('deleteRecipe', () => {
    it('should delete a recipe', () => {
      const deletingRecipeId = 'id0';
      const expectedActions = [
        { type: actionTypes.REQUEST_DELETE_RECIPE },
        {
          type: actionTypes.REQUEST_DELETE_RECIPE_SUCCESS,
          id: deletingRecipeId,
        },
      ];
      fetchMock.deleteOnce(
        '*',
        {
          status: 200,
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.deleteRecipe(deletingRecipeId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should fail to delete a recipe', () => {
      const deletingRecipeId = 'id0';
      const expectedActions = [
        { type: actionTypes.REQUEST_DELETE_RECIPE },
        {
          type: actionTypes.REQUEST_DELETE_RECIPE_FAILURE,
        },
        { type: actionTypes.ENQUEUE_ERROR, message: MSG_ERR_DELETE_RECIPE },
      ];
      fetchMock.deleteOnce(
        '*',
        {
          status: 404,
        },
      );
      const store = mockStore({ entity: { recipes: initialState } });
      return store.dispatch(actions.deleteRecipe(deletingRecipeId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
