import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../../../src/components/RecipeList';
import { INVALID_RECIPE_ID } from '../../../src/constants/values';
import * as recipeKinds from '../../../src/constants/recipe-kinds';

describe('test RecipeList', () => {
  const recipes = {
    id0: {
      kind: recipeKinds.MEMO,
      title: 'title1',
      content: {
        memo: 'content1',
      },
      createdAt: '2017-12-01T06:44:04.262Z',
      lastModifiedAt: '2017-12-01T06:44:04.262Z',
    },
    id1: {
      kind: recipeKinds.MEMO,
      title: 'title2',
      content: {
        memo: 'content2',
      },
      createdAt: '2017-12-02T06:44:04.262Z',
      lastModifiedAt: '2017-12-02T06:44:04.262Z',
    },
  };

  it('should render a spinner correctly when fetching === true', () => {
    const component = (
      <RecipeList
        isFetching
        recipes={recipes}
        selectedRecipeId="id1"
        onRecipeRowClick={() => {}}
        fetchRecipes={() => {}}
        openModalNewRecipe={() => {}}
        onSearchInputChange={() => {}}
        deselectRecipe={() => {}}
        onClickRecipeDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should render a list with 2 items (1 selected) correctly', () => {
    const component = (
      <RecipeList
        isFetching={false}
        recipes={recipes}
        selectedRecipeId="id1"
        onRecipeRowClick={() => {}}
        fetchRecipes={() => {}}
        openModalNewRecipe={() => {}}
        onSearchInputChange={() => {}}
        deselectRecipe={() => {}}
        onClickRecipeDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should render a list with 2 items (0 selected) correctly', () => {
    const component = (
      <RecipeList
        isFetching={false}
        recipes={recipes}
        selectedRecipeId={INVALID_RECIPE_ID}
        onRecipeRowClick={() => {}}
        fetchRecipes={() => {}}
        openModalNewRecipe={() => {}}
        onSearchInputChange={() => {}}
        deselectRecipe={() => {}}
        onClickRecipeDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should render a list with 0 items correctly', () => {
    const component = (
      <RecipeList
        isFetching={false}
        recipes={{}}
        selectedRecipeId={INVALID_RECIPE_ID}
        onRecipeRowClick={() => {}}
        fetchRecipes={() => {}}
        openModalNewRecipe={() => {}}
        onSearchInputChange={() => {}}
        deselectRecipe={() => {}}
        onClickRecipeDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });
});
