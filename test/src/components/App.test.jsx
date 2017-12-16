import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';

describe('test App', () => {
  it('should render correctly', () => {
    const component = <App />;
    expect(shallow(component)).toMatchSnapshot();
  });
});
