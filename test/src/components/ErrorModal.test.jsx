import React from 'react';
import { shallow } from 'enzyme';
import ErrorModal from '../../../src/components/ErrorModal';

describe('test ErrorModal', () => {
  it('should render no modal when isOpen === false', () => {
    const component = (
      <ErrorModal
        isOpen={false}
        onRequestClose={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });

  it('should render a modal when isOpen === true', () => {
    const component = (
      <ErrorModal
        isOpen
        message="Error message"
        onRequestClose={() => {}}
      />
    );
    expect(shallow(component)).toMatchSnapshot();
  });
});
