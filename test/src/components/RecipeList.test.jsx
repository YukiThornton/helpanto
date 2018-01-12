import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../../../src/components/RecipeList';
import { INVALID_RECIPE_ID } from '../../../src/constants/values';
import * as recipeTypes from '../../../src/constants/recipe-types';

describe('test RecipeList', () => {
  const recipes = {
    id0: {
      recipeType: recipeTypes.RECIPE_TYPE_MEMO,
      title: 'title1',
      body: {
        memo: 'content1',
      },
      createdAt: '2017-12-01T06:44:04.262Z',
      lastModifiedAt: '2017-12-01T06:44:04.262Z',
    },
    id1: {
      recipeType: recipeTypes.RECIPE_TYPE_MEMO,
      title: 'title2',
      body: {
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
        onClickRecipeDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });
});
