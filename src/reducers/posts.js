import {
  CREATED_POST,
  VOTED_POST,
  UPDATED_POST,
  DELETED_POST,
  POST_COMMENTS
} from "../actions";

export default function commentsReducer(state = {}, action = {}) {
  switch(action.types) {
    case CREATED_POST:
      return {
        ...state,
        createdPost: action.payload
      }

    case VOTED_POST:
      return {
        ...state,
        votedPost: action.payload
      }

    case UPDATED_POST:
      return {
        ...state,
        updatedPost: action.payload
      }

    case DELETED_POST:
      return {
        ...state,
        deletedPost: action.payload
      }

    case POST_COMMENTS:
      return {
        ...state,
        postComments: action.payload
      }

      default:
        return state;
  }
}
