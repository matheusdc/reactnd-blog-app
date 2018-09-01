export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_ACTIVE_POST = 'FETCH_ACTIVE_POSTS';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function createPost({ id, title, author, body, category }) {
  return {
    type: CREATE_POST,
    id,
    title,
    author,
    body,
    category
  };
}

export function removePost({ id }) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export function addComment({ id, parentId, author, body }) {
  return {
    type: ADD_COMMENT,
    id,
    parentId,
    author,
    body
  };
}

export function removeComment({ id }) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function commentsFetchSuccess(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  };
}

export function postsFetchSuccess(posts) {
  return {
    type: FETCH_POSTS,
    posts
  };
}

export function fetchActivePostSuccess(activePost) {
  return {
    type: FETCH_ACTIVE_POST,
    activePost
  };
}

export function categoriesFetchSuccess(categories) {
  return {
    type: FETCH_CATEGORIES,
    categories: categories.categories
  };
}

export function submitPostToServer(data) {
  return postData('/posts', data, createPost);
}

export function submitCommentToServer(data) {
  return postData('/comments', data, addComment);
}

export function votePost(id, vote) {
  return postData(`/posts/${id}`, { option: vote});
}

export function voteComment(id, vote) {
  return postData(`/comments/${id}`, { option: vote});
}

export function postData(url, payload, callback) {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => dispatch(callback(data)))
  };
}

export function fetchData(url, callback) {
  return (dispatch) => {
    fetch(url, {
        headers: { 'Authorization': 'whatever-you-want' }
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(callback(data)))
  };
}

export function deletePost(id) {
  return deleteData(`/posts/${id}`, removePost);
}

export function deleteComment(id) {
  return deleteData(`/comments/${id}`, removeComment);
}

export function deleteData(url, callback) {
  return (dispatch) => {
    fetch(url, {
      method: 'DELETE',
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => dispatch(callback(data)))
  };
}

export function putData(url, payload, callback) {
  return (dispatch) => {
    fetch(url, {
      method: 'PUT',
      headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => dispatch(callback(data)))
  };
}

export function fetchPosts() {
  return fetchData('/posts', postsFetchSuccess);
}

export function fetchPostById(id) {
  return fetchData(`/posts/${id}`, fetchActivePostSuccess);
}

export function fetchCommentsFromPost(postId) {
  return fetchData(`/posts/${postId}/comments`, commentsFetchSuccess);
}

export function fetchCategories() {
  return fetchData('/categories', categoriesFetchSuccess);
}

export function fetchPostsByCategory(category) {
  if(typeof category === 'undefined') {
    return fetchPosts();
  }
  return fetchData(`/${category}/posts`, postsFetchSuccess);
}