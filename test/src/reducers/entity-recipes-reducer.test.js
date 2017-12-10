import reducer from '../../../src/reducers/entity-recipes-reducer';
import * as actionTypes from '../../../src/constants/action-types';

describe('entity-recipes reducer', () => {
  const initialState = {
    isFetching: false,
    byId: {},
  };
  const recipes = [
    {
      title: 'title1',
      content: 'content1',
      createdAt: '2017-12-01T06:44:04.262Z',
      lastModifiedAt: '2017-12-01T06:44:04.262Z',
    },
    {
      title: 'title2',
      content: 'content2',
      createdAt: '2017-12-02T06:44:04.262Z',
      lastModifiedAt: '2017-12-02T06:44:04.262Z',
    },
    {
      title: 'title1',
      content: 'content1',
      createdAt: '2017-12-01T06:44:04.262Z',
      lastModifiedAt: '2017-12-01T06:44:04.262Z',
    },
    {
      title: 'title2',
      content: 'content2',
      createdAt: '2017-12-02T06:44:04.262Z',
      lastModifiedAt: '2017-12-02T06:44:04.262Z',
    },
  ];
  const typicalById1 = {
    id0: recipes[0],
    id1: recipes[1],
  };
  const typicalById2 = {
    id2: recipes[2],
    id3: recipes[3],
  };
  const requestingStateWithById = {
    isFetching: true,
    byId: typicalById1,
  };
  const requestingStateWithoutById = {
    isFetching: true,
    byId: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('should handle REQUEST_GET_RECIPES', () => {
    it('should set isFetching to true', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.REQUEST_GET_RECIPES,
        },
      )).toEqual({
        isFetching: true,
        byId: initialState.byId,
      });
    });
  });

  describe('should handle REQUEST_POST_RECIPE', () => {
    it('should set isFetching to true', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.REQUEST_POST_RECIPE,
        },
      )).toEqual({
        isFetching: true,
        byId: initialState.byId,
      });
    });
  });

  describe('should handle REQUEST_DELETE_RECIPE', () => {
    it('should set isFetching to true', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.REQUEST_DELETE_RECIPE,
        },
      )).toEqual({
        isFetching: true,
        byId: initialState.byId,
      });
    });
  });

  describe('should handle REQUEST_GET_RECIPES_SUCCESS', () => {
    it('should set byId', () => {
      expect(reducer(
        requestingStateWithoutById,
        {
          type: actionTypes.REQUEST_GET_RECIPES_SUCCESS,
          recipes: typicalById1,
        },
      )).toEqual({
        isFetching: false,
        byId: typicalById1,
      });
    });

    it('should replace old byId', () => {
      expect(reducer(
        requestingStateWithById,
        {
          type: actionTypes.REQUEST_GET_RECIPES_SUCCESS,
          recipes: typicalById2,
        },
      )).toEqual({
        isFetching: false,
        byId: typicalById2,
      });
    });
  });

  describe('should handle REQUEST_POST_RECIPE_SUCCESS', () => {
    it('should set updated recipe', () => {
      expect(reducer(
        requestingStateWithById,
        {
          type: actionTypes.REQUEST_POST_RECIPE_SUCCESS,
          recipe: recipes[3],
          id: 'id0',
        },
      )).toEqual({
        isFetching: false,
        byId: {
          id0: recipes[3],
          id1: recipes[1],
        },
      });
    });
  });

  describe('should handle REQUEST_DELETE_RECIPE_SUCCESS', () => {
    it('should remove deleted recipe', () => {
      expect(reducer(
        requestingStateWithById,
        {
          type: actionTypes.REQUEST_DELETE_RECIPE_SUCCESS,
          id: 'id0',
        },
      )).toEqual({
        isFetching: false,
        byId: {
          id1: recipes[1],
        },
      });
    });
  });

  describe('should handle REQUEST_GET_RECIPES_FAILURE', () => {
    it('should set isFetching to false', () => {
      expect(reducer(
        requestingStateWithoutById,
        {
          type: actionTypes.REQUEST_GET_RECIPES_FAILURE,
        },
      )).toEqual({
        isFetching: false,
        byId: requestingStateWithoutById.byId,
      });
    });
  });

  describe('should handle REQUEST_POST_RECIPE_FAILURE', () => {
    it('should set isFetching to false', () => {
      expect(reducer(
        requestingStateWithById,
        {
          type: actionTypes.REQUEST_POST_RECIPE_FAILURE,
        },
      )).toEqual({
        isFetching: false,
        byId: requestingStateWithById.byId,
      });
    });
  });

  describe('should handle REQUEST_DELETE_RECIPE_FAILURE', () => {
    it('should set isFetching to false', () => {
      expect(reducer(
        requestingStateWithById,
        {
          type: actionTypes.REQUEST_DELETE_RECIPE_FAILURE,
        },
      )).toEqual({
        isFetching: false,
        byId: requestingStateWithById.byId,
      });
    });
  });
});
