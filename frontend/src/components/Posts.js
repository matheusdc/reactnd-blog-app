/**
 * Class that represent the Post list 
 */

import React from 'react';

import PostHeadline from './PostHeadline'

const Posts = (props) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}><PostHeadline {...post} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
