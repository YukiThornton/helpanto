import React from 'react';
import { shallow } from 'enzyme';
import RecipeRow from '../../../src/components/RecipeRow';

describe('test RecipeRow', () => {
  it('should render correctly when selected === true', () => {
    const component = (
      <RecipeRow
        id="3"
        title="Recipe title"
        selected
        onClick={() => {}}
        onClickDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should render correctly when selected === false', () => {
    const component = (
      <RecipeRow
        id="3"
        title="Recipe title"
        selected={false}
        onClick={() => {}}
        onClickDeleteBtn={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });
});
