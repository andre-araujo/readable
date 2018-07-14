import React from 'react';
import { shallow } from 'enzyme';

import Home from '.';

describe('Home', () => {
  it('should match snapshot', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  });
});
