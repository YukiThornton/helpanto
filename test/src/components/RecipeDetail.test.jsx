import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetail from '../../../src/components/RecipeDetail';

describe('test RecipeDetail', () => {
  it('should render nothing when visible === false', () => {
    const component = (
      <RecipeDetail
        visible={false}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should render recipe detals when visible === true', () => {
    const component = (
      <RecipeDetail
        visible
        recipe={{
          title: 'title1',
          content: 'content1',
          createdAt: '2017-12-01T06:44:04.262Z',
          lastModifiedAt: '2017-12-01T06:44:04.262Z',
        }}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });
});
