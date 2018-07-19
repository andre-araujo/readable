import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./modules/Header";

import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post';

import styles from './styles.scss';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
