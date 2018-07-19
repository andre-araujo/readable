import React from 'react';
import { shallow } from 'enzyme';

import PostList from '.';

describe('PostList', () => {
  it('should match snapshot', () => {
    expect(shallow(<PostList />)).toMatchSnapshot();
  });
});
