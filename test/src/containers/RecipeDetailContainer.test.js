import { mapStateToProps } from '../../../src/containers/RecipeDetailContainer';
import { INVALID_RECIPE_ID } from '../../../src/constants/values';

describe('RecipeDetailContainer', () => {
  describe('mapStateToProps', () => {
    const byId = {
      id01: {
        title: 'title1',
        content: 'content1',
        createdAt: '2017-12-01T06:44:04.262Z',
        lastModifiedAt: '2017-12-01T06:44:04.262Z',
      },
      id02: {
        title: 'title2',
        content: 'content2',
        createdAt: '2017-12-02T06:44:04.262Z',
        lastModifiedAt: '2017-12-02T06:44:04.262Z',
      },
    };

    it('should return a visible recipe when a recipe is selected', () => {
      const selectedRecipeId = 'id01';
      const store = {
        entity: {
          recipes: {
            byId,
          },
        },
        status: {
          recipeList: {
            selected: true,
            selectedRecipeId,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        recipe: byId[selectedRecipeId],
        visible: true,
      });
    });

    it('should return visible as false when a recipe is not selected', () => {
      const store = {
        entity: {
          recipes: {
            byId: {},
          },
        },
        status: {
          recipeList: {
            selected: false,
            selectedRecipeId: INVALID_RECIPE_ID,
          },
        },
      };
      expect(mapStateToProps(store)).toEqual({
        visible: false,
      });
    });
  });
});
