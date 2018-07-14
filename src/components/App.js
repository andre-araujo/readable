import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./modules/Header";

import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post';

import styles from './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className={styles.container}>
            <Route exact path="/" component={Home} />
            <Route path="/category/:id" component={Category} />
            <Route path="/post/:id" component={Post} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
