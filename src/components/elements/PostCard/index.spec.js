import React from 'react';
import { shallow } from 'enzyme';

import PostCard from '.';

describe('PostCard', () => {
  it('should match snapshot', () => {
    expect(shallow(<PostCard />)).toMatchSnapshot();
  });
});
