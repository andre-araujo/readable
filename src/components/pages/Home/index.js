import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

import PostList from '../../modules/PostList';
import CategoryNav from '../../modules/CategoryNav';

class Home extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const {
      categories
    } = this.props

    return (
      <div>
        <CategoryNav categories={categories} />
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
})

const mapDispatchToProps = (dispatch) => ({
  getCategories() {
    dispatch(actions.getCategories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
