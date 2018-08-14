export const CREATE_POST = 'CREATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

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