import { mapStateToProps } from '../../../src/containers/RecipeListContainer';
import * as recipeKinds from '../../../src/constants/recipe-kinds';

describe('RecipeListContainer', () => {
  describe('mapStateToProps', () => {
    const byId = {
      id01: {
        kind: recipeKinds.MEMO,
        title: 'title1',
        content: {
          memo: 'content1',
        },
        createdAt: '2017-12-01T06:44:04.262Z',
        lastModifiedAt: '2017-12-01T06:44:04.262Z',
      },
      id02: {
        kind: recipeKinds.MEMO,
        title: 'title2',
        content: {
          memo: 'content2',
        },
        createdAt: '2017-12-02T06:44:04.262Z',
        lastModifiedAt: '2017-12-02T06:44:04.262Z',
      },
    };

    it('should return all recipes when filterText is empty', () => {
      const isFetching = false;
      const selectedRecipeId = 'id01';
      const filterText = '';
      const store = {
        entity: {
          recipes: {
            isFetching,
            byId,
          },
        },
        status: {
          recipeList: {
            selected: true,
            selectedRecipeId,
            filterText,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isFetching,
        recipes: byId,
        selectedRecipeId,
      });
    });

    it('should return filtered recipes when filterText is not empty', () => {
      const isFetching = false;
      const selectedRecipeId = 'id01';
      const filteredRecipeId = 'id01';
      const filterText = byId[filteredRecipeId].title;
      const store = {
        entity: {
          recipes: {
            isFetching,
            byId,
          },
        },
        status: {
          recipeList: {
            selected: true,
            selectedRecipeId,
            filterText,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        isFetching,
        recipes: { [filteredRecipeId]: byId[filteredRecipeId] },
        selectedRecipeId,
      });
    });
  });
});
