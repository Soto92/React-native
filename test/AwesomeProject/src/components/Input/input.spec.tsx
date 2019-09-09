import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Input from './index';

describe('Input shallow test', () => {
  it('should shallow render a Input component', () => {
    shallow(<Input label="Input" placeholder="placeholder" />);
  });
});

describe('Input Snapshot test', () => {
  it('should render the component correctly', () => {
    const tree = renderer
      .create(<Input label="Input" placeholder="placeholder" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

