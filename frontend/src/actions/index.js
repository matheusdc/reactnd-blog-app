export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function createPost({ title, author, body, category }) {
  return {
    type: CREATE_POST,
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

export function addComment({ parentId, author, body }) {
  return {
    type: ADD_COMMENT,
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

export function categoriesFetchSuccess(categories) {
  return {
    type: FETCH_CATEGORIES,
    categories: categories.categories
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

export function fetchPosts() {
  return fetchData('/posts', postsFetchSuccess)
}

export function fetchComments() {
  return fetchData('/comments', commentsFetchSuccess)
}

export function fetchCategories() {
  return fetchData('/categories', categoriesFetchSuccess)
}