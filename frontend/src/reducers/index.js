import { combineReducers } from 'redux';

import {
  CREATE_POST,
  REMOVE_POST,
  FETCH_POSTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_CATEGORIES
} from '../actions';

function post(state = { posts: [] }, action) {
  switch (action.type) {
    case CREATE_POST:
      const { title, author, body, category } = action;
      const post = {
        title,
        author,
        body,
        timestamp: new Date(),
        category,
        voteScore: 1,
        deleted: false
      };

      return {
        ...state,
        posts: state.posts.concat([post])
      };
    case REMOVE_POST:
      const { id } = action;

      return {
        ...state,
        posts: state.posts.filter(post => (post.id !== id))
      };
    case FETCH_POSTS:
      const { posts } = action;
      return {
        ...state,
        posts
      };
    default:
      return {
        ...state
      };
  }
}

function comment(state = { comments: [] }, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const { parentId, author, body } = action;
      const comment = {
        parentId,
        author,
        body,
        timestamp: new Date(),
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      };

      return {
        ...state,
        comments: state.comments.concat([comment])
      };
    case REMOVE_COMMENT:
      const { id } = action;

      return {
        ...state,
        comments: state.comments.filter(comment => (comment.id !== id))
      };
    default:
      return {
        ...state
      };
  }
}

function category(state = { categories: [] }, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      const { categories } = action;
      return {
        ...state,
        categories
      };
    default:
      return {
        ...state
      };
  }
}

export default combineReducers({
  post,
  comment,
  category
});