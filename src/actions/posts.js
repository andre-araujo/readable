import fetchHandler from '../lib/fetchHandler';

export const CREATED_POST = 'CREATED_POST';
export const VOTED_POST = 'VOTED_POST';
export const UPDATED_POST = 'UPDATED_POST';
export const DELETED_POST = 'DELETED_POST';
export const POST_COMMENTS = 'POST_COMMENTS';

export function getPosts() {
  return dispatch =>
    fetchHandler('/posts')
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'POSTS'
      }));
}

export function createPost({
  id,
  timestamp,
  title,
  body,
  author,
  category,
}) {
  return dispatch =>
    fetchHandler(`/posts`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        timestamp,
        title,
        body,
        author,
        category,
      })
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'CREATED_POST'
      }));
}

/**
 * Used to vote on a post
 * @param {String} id Post id
 * @param {String} option vote option, can be "upVote" or "downVote"
 *
 */
export function voteOnPost({
  id,
  option
}) {
  return dispatch =>
    fetchHandler(`/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        option
      })
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'VOTED_POST'
      }));
}

export function updatePost({
  id,
  title,
  body,
}) {
  return dispatch =>
    fetchHandler(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title,
        body,
      })
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'UPDATED_POST'
      }));
}

export function deletePost({
  id
}) {
  return dispatch =>
    fetchHandler(`/posts/${id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'DELETED_POST'
      }));
}

export function getPostComments({
  id
}) {
  return dispatch =>
    fetchHandler(`/posts/${id}/comments`)
      .then(resp => resp.json())
      .then((payload) => dispatch({
        payload,
        type: 'POST_COMMENTS'
      }));
}
