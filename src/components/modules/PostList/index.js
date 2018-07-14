import React from 'react';

import PostCard from '../../elements/PostCard';

function PostList() {
  return (
    <ul>
      <li>
        <PostCard
          id="id"
          timestamp="timestamp"
          title="title"
          body="body"
          author="author"
          category="category"
          voteScore="voteScore"
        />
      </li>
    </ul>
  )
}

export default PostList;
