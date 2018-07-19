import fetchHandler from '../lib/fetchHandler';

export const CATEGORIES = 'CATEGORIES';
export const CATEGORY_POSTS = 'CATEGORY_POSTS';

export function getCategories() {
  return dispatch =>
    fetchHandler('/categories')
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'CATEGORIES'
      }));
}

export function getCategoryPosts(categoryId) {
  return dispatch =>
    fetchHandler(`/${categoryId}/posts`)
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'CATEGORY_POSTS'
      }));
}
