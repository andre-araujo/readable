import {
  CREATED_COMMENT,
  COMMENT_DETAILS,
  VOTED_COMMENT,
  UPDATED_COMMENT,
  DELETED_COMMENT
} from "../actions";

export default function commentsReducer(state = {}, action = {}) {
  switch (action.type) {
    case CREATED_COMMENT:
      return {
        ...state,
        createdComment: action.payload
      }

    case COMMENT_DETAILS:
      return {
        ...state,
        commentDetails: action.payload
      }

    case VOTED_COMMENT:
      return {
        ...state,
        votedComment: action.payload
      }

    case UPDATED_COMMENT:
      return {
        ...state,
        updatedComment: action.payload
      }

    case DELETED_COMMENT:
      return {
        ...state,
        deletedComment: action.payload
      }

    default:
      return state;
  }
}
