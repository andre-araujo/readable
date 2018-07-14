import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

function PostCard ({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore
}) {
    return (
      <section>
        <header>
          <h1>{title}</h1>
          <p>By: {author}</p>
        </header>
        <div>
          <p>{body}</p>
        </div>
        <footer>
          <time>{timestamp}</time>
          <p>{voteScore}</p>
        </footer>
      </section>
    );
}

export default PostCard;
