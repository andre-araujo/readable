import React from 'react';
import { shallow } from 'enzyme';

import Category from '.';

describe('Category', () => {
  it('should match snapshot', () => {
    expect(shallow(<Category />)).toMatchSnapshot();
  });
});
