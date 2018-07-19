import { combineReducers } from 'redux';
import loading from 'redux-loading-middleware/loadingReducer';

import categories from './categories';
import comments from './comments';
import posts from './posts';

export default combineReducers({
  categories,
  comments,
  posts,
  loading
});
