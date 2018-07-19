import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

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
      <section className={styles.container}>
        <header>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.author}>By: {author}</p>
        </header>
        <div>
          <p>{body}</p>
        </div>
        <footer className={styles.footer}>
          <p>Score: {voteScore}</p>
          <time className={styles.time}>{timestamp}</time>
        </footer>
      </section>
    );
}

export default PostCard;
