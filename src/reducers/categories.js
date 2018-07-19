import {
  CATEGORIES,
  CATEGORY_POSTS
 } from "../actions";

export default function categoriesReducer(state = {}, action = {}) {
  switch(action.types) {
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case CATEGORY_POSTS:
      return {
        ...state,
        categoryPosts: action.payload
      }

      default:
        return state;

  }
}
