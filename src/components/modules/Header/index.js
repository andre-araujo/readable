import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

class Header extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/category/1" className={styles.link}>Categories</Link>
        <Link to="/post/1" className={styles.link}>Posts</Link>
      </nav>
    );
  }
}

export default Header;
