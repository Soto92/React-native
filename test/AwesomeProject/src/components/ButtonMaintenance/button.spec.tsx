import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from './index';

describe('Button shallow test', () => {
  it('should shallow render a button component', () => {
    shallow(<Button title="Button" />);
  });
});

describe('Button Snapshot test', () => {
  it('should render the component correctly', () => {
    const tree = renderer
      .create(<Button title="Button" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

