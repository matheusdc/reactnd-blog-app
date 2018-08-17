/**
 * Class that represent the Post 
 */

import React from 'react';

const Post = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <span>{`${props.author} - ${props.timestamp}`}</span>
      <span>{props.category}</span>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;