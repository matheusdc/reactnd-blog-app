/**
 * Class that represent the Post 
 */

import React from 'react';
import { Link } from 'react-router-dom';

const PostHeadline = (props) => {
  return (
    <Link to={'/posts/' + props.id} style={{ textDecoration: 'none' }}>
      <div>
        <h3>{props.title}</h3>
        <span>{`${props.author} - ${new Date(props.timestamp)} `}</span>
        <span>{props.category}</span>
        <p>{props.body}</p>
      </div>
      </Link>
  );
}

export default PostHeadline;