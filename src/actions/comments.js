import fetchHandler from '../lib/fetchHandler';

export const CREATED_COMMENT = 'CREATED_COMMENT';
export const COMMENT_DETAILS = 'COMMENT_DETAILS';
export const VOTED_COMMENT = 'VOTED_COMMENT';
export const UPDATED_COMMENT = 'UPDATED_COMMENT';
export const DELETED_COMMENT = 'DELETED_COMMENT';

export function createComment({
  id,
  timestamp,
  body,
  author,
  parentId,
}) {
  return dispatch =>
    fetchHandler('/comments', {
      method: 'POST',
      body: JSON.stringify({
        id,
        timestamp,
        body,
        author,
        parentId,
      })
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'CREATED_COMMENT'
      }));
}

export function getCommentDetails({
  id
}) {
  return dispatch =>
    fetchHandler(`/comments/${id}`)
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'COMMENT_DETAILS'
      }));
}

/**
 * Used to vote on a comment
 * @param {String} id Comment id
 * @param {String} option vote option, can be "upVote" or "downVote"
 *
 */
export function voteOnComment({
  id,
  option
}) {
  return dispatch =>
    fetchHandler(`/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        option
      })
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'VOTED_COMMENT'
      }));
}

export function updateComment({
  id,
  timestamp,
  body,
}) {
  return dispatch =>
    fetchHandler(`/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        timestamp,
        body,
      })
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'UPDATED_COMMENT'
      }));
}

export function deleteComment({
  id,
}) {
  return dispatch =>
    fetchHandler(`/comments/${id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'DELETED_COMMENT'
      }));
}
