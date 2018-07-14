import React from 'react';
import { shallow } from 'enzyme';

import Post from '.';

describe('Post', () => {
  it('should match snapshot', () => {
    expect(shallow(<Post />)).toMatchSnapshot();
  });
});
