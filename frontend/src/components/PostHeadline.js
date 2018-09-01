/**
 * Class that represent the Post 
 */

import React from 'react';
import { Link } from 'react-router-dom';

const PostHeadline = (props) => {
  return (
      <div>
        <Link to={`/posts/${props.id}`} style={{ textDecoration: 'none' }}>
          <h3>{props.title}</h3>
        </Link>
        <span>{`${props.author} - ${new Date(props.timestamp)} `}</span>
        <span>{props.category}</span>
        <p>{props.body}</p>
      </div>
  );
}

export default PostHeadline;