/**
 * Class that represent the Post list 
 */

import React from 'react';

import PostHeadline from './PostHeadline'

const Posts = (props) => {
  
  return (
    <div>
      {props.posts.filter(post => !post.deleted).map(post => (
        <div key={post.id}><PostHeadline {...post} /></div>
      ))}
    </div>
  );
}

export default Posts;
