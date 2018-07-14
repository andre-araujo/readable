import React, { Component, Fragment } from 'react';
import PostList from '../../modules/PostList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <PostList />
      </div>
    );
  }
}

export default Home;
